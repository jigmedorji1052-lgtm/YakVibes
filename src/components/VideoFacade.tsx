import { useState } from "react";
import { PlayIcon } from "./icons";

type VideoFacadeProps = {
  videoId: string;
  title: string;
  artist: string;
};

/* Click-to-load YouTube facade: a lightweight thumbnail + play button is shown
   first; the (privacy-friendly, youtube-nocookie) iframe is only injected on
   click, so no third-party player code loads until the visitor asks for it. */
export default function VideoFacade({ videoId, title, artist }: VideoFacadeProps) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={`${title} — ${artist}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      onClick={() => setActivated(true)}
      aria-label={`Play ${title} by ${artist}`}
      className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden bg-burgundy text-left"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10 transition duration-300 group-hover:from-ink/35" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-saffron text-white shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-saffron-deep">
          <PlayIcon className="ml-0.5 h-6 w-6" />
        </span>
      </span>
      <span className="absolute bottom-2.5 right-3 font-display text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cream/85">
        Click to play
      </span>
    </button>
  );
}
