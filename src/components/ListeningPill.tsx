import { useState } from "react";
import { PauseIcon, PlayIcon, SkipForwardIcon } from "./icons";

const tracks = [
  { title: "White Tara Chant", artist: "Phub Zam" },
  { title: "Yak Laby", artist: "Kheng Sonam Dorji" },
  { title: "Om Mani Padme Hum", artist: "Phub Zam" },
  { title: "Medicine Buddha Chant", artist: "Kheng Sonam Dorji" },
];

const BAR_HEIGHTS = [14, 20, 10, 17];

export default function ListeningPill() {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);

  const track = tracks[index];

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="flex items-center gap-3 rounded-2xl border border-ink/15 bg-ink py-2.5 pl-2.5 pr-3.5 text-cream shadow-2xl">
        <button
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Pause the listening room" : "Play the listening room"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-saffron text-white transition duration-300 hover:bg-saffron-deep active:scale-90"
        >
          {playing ? <PauseIcon className="h-4.5 w-4.5" /> : <PlayIcon className="ml-0.5 h-4.5 w-4.5" />}
        </button>

        <div className="min-w-0">
          <p className="font-display text-[0.58rem] font-bold uppercase tracking-[0.24em] text-gold">
            Listening Room
          </p>
          <p className="max-w-[180px] truncate font-display text-sm font-semibold leading-snug sm:max-w-[220px]">
            {track.title} <span className="font-body font-normal italic text-cream/55">· {track.artist}</span>
          </p>
        </div>

        <div className={`${playing ? "" : "eq-paused "}flex h-5 shrink-0 items-end gap-[3px]`} aria-hidden="true">
          {BAR_HEIGHTS.map((h, i) => (
            <span
              key={i}
              className="eq-bar w-[3px] rounded-full bg-gold"
              style={{ height: `${h}px`, animationDelay: `${[0, 0.18, 0.32, 0.09][i]}s` }}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => (i + 1) % tracks.length)}
          aria-label="Next track"
          className="shrink-0 text-cream/45 transition hover:text-gold"
        >
          <SkipForwardIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
