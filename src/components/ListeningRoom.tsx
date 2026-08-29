import { useEffect, useRef, useState } from "react";

/* Minimal typing for the slice of the Widget API we use. */
type ProgressPayload = { relativePosition?: number };

type SCWidget = {
  bind: (event: string, handler: (e?: ProgressPayload) => void) => void;
  unbind: (event: string) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  getCurrentSound: (cb: (sound: { title?: string } | null) => void) => void;
};

type SCNamespace = {
  Widget: ((el: HTMLIFrameElement) => SCWidget) & {
    Events: {
      READY: string;
      PLAY: string;
      PAUSE: string;
      FINISH: string;
      PLAY_PROGRESS: string;
    };
  };
};

declare global {
  interface Window {
    SC?: SCNamespace;
  }
}

/* Invisible audio engine — the playlist feed is never shown to visitors. */
const AUDIO_FEED =
  "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fjigme-dorji-62211426%2Fsets%2Fyakvibes-sacredsounds&color=%23C2410C&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false";

export default function ListeningRoom() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SCWidget | null>(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState("Sacred Sounds");
  const [progress, setProgress] = useState(0);

  // Bind the Widget API (SC.Widget on #scPlayer) once it is available.
  useEffect(() => {
    let disposed = false;
    let timer: number | undefined;
    let widget: SCWidget | null = null;

    const refreshTitle = () => {
      widget?.getCurrentSound((sound) => {
        if (!disposed && sound?.title) setTrack(sound.title);
      });
    };

    const init = () => {
      const SC = window.SC;
      if (!SC || !iframeRef.current) return false;
      widget = SC.Widget(iframeRef.current);
      widgetRef.current = widget;

      // Surface the current title when ready and whenever a track starts.
      widget.bind(SC.Widget.Events.READY, refreshTitle);
      widget.bind(SC.Widget.Events.PLAY, () => {
        setPlaying(true);
        refreshTitle();
      });
      widget.bind(SC.Widget.Events.PAUSE, () => setPlaying(false));
      // Fill the progress bar from the engine's playback position.
      widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e) => {
        if (typeof e?.relativePosition === "number") {
          setProgress(Math.min(100, Math.max(0, e.relativePosition * 100)));
        }
      });
      // Auto-advance when a track finishes.
      widget.bind(SC.Widget.Events.FINISH, () => widget?.next());
      return true;
    };

    if (!init()) {
      timer = window.setInterval(() => {
        if (init() || disposed) window.clearInterval(timer);
      }, 150);
    }

    return () => {
      disposed = true;
      if (timer) window.clearInterval(timer);
      const SC = window.SC;
      if (widget && SC) {
        try {
          widget.unbind(SC.Widget.Events.READY);
          widget.unbind(SC.Widget.Events.PLAY);
          widget.unbind(SC.Widget.Events.PAUSE);
          widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
          widget.unbind(SC.Widget.Events.FINISH);
        } catch {
          /* player already torn down */
        }
      }
      widgetRef.current = null;
    };
  }, []);

  // Scroll-aware: close the panel when scrolling down past 120px (music keeps playing).
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastY && y > 120) setOpen(false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The nav's "Listen Now" button opens the panel from anywhere on the site.
  useEffect(() => {
    const onOpenRequest = () => setOpen(true);
    window.addEventListener("lr:open", onOpenRequest);
    return () => window.removeEventListener("lr:open", onOpenRequest);
  }, []);

  return (
    <aside
      id="listeningRoom"
      className={"listening-room" + (open ? " open" : "") + (playing ? " playing" : "")}
      aria-label="Listening Room audio player"
    >
      <div className="lr-panel" id="lrPanel">
        <div className="lr-header">
          <span className="listening-room-label">Listening Room · Sacred Sounds</span>
          <button className="lr-min" id="lrMin" aria-label="Minimize player" onClick={() => setOpen(false)}>
            ▾
          </button>
        </div>

        <div className="lr-controls">
          <button
            className="lr-btn lr-btn-skip"
            id="lrPrev"
            aria-label="Previous track"
            onClick={() => widgetRef.current?.prev()}
          >
            «
          </button>
          <button
            className="lr-btn lr-btn-play"
            id="lrPlay"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => widgetRef.current?.toggle()}
          >
            {playing ? "❚" : "▶"}
          </button>
          <button
            className="lr-btn lr-btn-skip"
            id="lrNext"
            aria-label="Next track"
            onClick={() => widgetRef.current?.next()}
          >
            »
          </button>
          <span className="lr-track" id="lrTrack" title={track}>
            {track}
          </span>
        </div>

        {/* Track progress — filled live from the audio engine */}
        <div className="lr-progress" aria-hidden="true">
          <div className="lr-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Invisible audio engine: 1×1, transparent, non-interactive — audio only */}
        <iframe
          id="scPlayer"
          ref={iframeRef}
          aria-hidden="true"
          tabIndex={-1}
          allow="autoplay"
          referrerPolicy="no-referrer"
          title="YakVibes audio engine"
          src={AUDIO_FEED}
          style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none", border: 0 }}
        />
      </div>

      <button
        className="lr-toggle"
        id="lrToggle"
        aria-expanded={open}
        aria-controls="lrPanel"
        aria-label="Open Listening Room player"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lr-icon">🎧</span>
        <span className="lr-eq" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>
    </aside>
  );
}
