import type { Route } from "../components/Nav";
import CtaBand from "../components/CtaBand";
import Mantra from "../components/Mantra";
import Reveal from "../components/Reveal";
import { ArrowRightIcon, ExternalIcon, PlayIcon } from "../components/icons";
import { IMAGES, LINKS, artists, type Artist } from "../data";

type PageProps = {
  onNavigate: (page: Route, section?: string) => void;
};

const stats: Array<[string, string]> = [
  ["2", "featured artists"],
  ["30+", "chants & folk songs recorded"],
  ["1", "shared mission — preservation"],
];

function ArtistProfile({ artist, flip = false }: { artist: Artist; flip?: boolean }) {
  return (
    <section id={artist.id} className="relative scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Portrait */}
            <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
              <div className="relative">
                <span
                  className="pointer-events-none absolute -left-4 -top-14 z-10 hidden select-none font-display text-[7.5rem] font-extrabold leading-none text-gold/60 sm:block"
                  aria-hidden="true"
                >
                  {artist.index}
                </span>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={artist.portrait}
                    alt={artist.portraitAlt}
                    className="w-full rounded-lg object-cover shadow-[22px_22px_0_#D97706] transition duration-700 ease-out hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-16">
                    <p className="font-display text-lg font-bold text-cream">{artist.name}</p>
                    <p className="font-body text-sm italic text-cream/80">{artist.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
              <p className="font-display text-xs font-bold uppercase tracking-[0.32em] text-saffron">
                {artist.eyebrow}
              </p>
              <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold">{artist.name}</h2>
              <p className="mt-2 font-body italic leading-relaxed text-ink-soft">{artist.role}</p>

              <div className="mt-6 space-y-4">
                {artist.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {artist.facts.map((fact) => (
                  <div key={fact.label} className="border-l-2 border-gold pl-3">
                    <dt className="font-display text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-soft">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-semibold leading-snug text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <blockquote className="mt-10 border-l-4 border-gold pl-5">
                <p className="font-body text-lg italic leading-relaxed text-burgundy">
                  &ldquo;{artist.quote}&rdquo;
                </p>
                <footer className="mt-2.5 font-display text-[0.68rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                  — {artist.name}, in conversation with YakVibes
                </footer>
              </blockquote>

              {/* Discography */}
              <div className="mt-11">
                <div className="flex flex-wrap items-end justify-between gap-2 border-b-2 border-burgundy/80 pb-2.5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.26em] text-burgundy">
                    Selected Recordings
                  </h3>
                  <span className="font-display text-xs font-semibold text-ink-soft">
                    Full library on YouTube ↗
                  </span>
                </div>
                <ul className="divide-y divide-ink/10">
                  {artist.discography.map((recording, i) => (
                    <li key={recording.title}>
                      <a
                        href={LINKS.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="group -mx-3 flex items-center gap-4 rounded-md px-3 py-3.5 transition duration-300 hover:bg-paper hover:shadow-sm"
                      >
                        <span className="w-7 shrink-0 font-display text-sm font-bold text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-display font-semibold text-ink transition-colors duration-300 group-hover:text-saffron">
                            {recording.title}
                          </span>
                          <span className="block truncate font-body text-sm italic text-ink-soft">
                            {recording.note}
                          </span>
                        </span>
                        <span className="hidden shrink-0 font-display text-xs font-semibold tracking-[0.15em] text-ink-soft sm:block">
                          {recording.duration}
                        </span>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-burgundy/10 text-burgundy opacity-70 transition duration-300 group-hover:bg-saffron group-hover:text-cream group-hover:opacity-100">
                          <PlayIcon className="ml-px h-4 w-4" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-saffron px-6 py-3 font-display font-semibold text-white shadow-md shadow-saffron/25 transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
              >
                Listen on YouTube <ExternalIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Artists({ onNavigate }: PageProps) {
  return (
    <>
      {/* ---------- Page header ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img src={IMAGES.valley} alt="" className="kenburns h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/80" aria-hidden="true" />
              <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.42em] text-gold">
                The Artists
              </p>
            </div>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.05] text-cream">
              The Voices Behind <em className="font-body font-medium italic text-gold">the Vibes</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
              Two artists. Two traditions. One promise — that the songs of Bhutan reach the next generation
              exactly as the valleys taught them.
            </p>
            <div className="mt-12 grid max-w-2xl grid-cols-3 divide-x divide-cream/15">
              {stats.map(([value, label], i) => (
                <div key={label} className={i === 0 ? "pr-4 sm:pr-8" : "px-4 sm:px-8"}>
                  <p className="font-display text-3xl font-extrabold text-gold md:text-4xl">{value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-cream/70 md:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Artist 01 ---------- */}
      <ArtistProfile artist={artists[0]} />

      <Mantra />

      {/* ---------- Artist 02 ---------- */}
      <ArtistProfile artist={artists[1]} flip />

      {/* ---------- Together ---------- */}
      <section className="relative bg-paper py-20 md:py-24">
        <div className="texture-dots-dark absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
              <div className="flex shrink-0">
                <img
                  src={IMAGES.khengPortrait}
                  alt="Kheng Sonam Dorji"
                  className="h-28 w-28 rounded-full border-4 border-cream object-cover shadow-xl transition duration-500 hover:-translate-y-1.5"
                />
                <img
                  src={IMAGES.phubPortrait}
                  alt="Phub Zam"
                  className="-ml-9 mt-7 h-28 w-28 rounded-full border-4 border-cream object-cover shadow-xl transition duration-500 hover:-translate-y-1.5"
                />
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-saffron">
                  One Studio · One Purpose
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Two Voices, One Promise</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  From the slow classical songs of the Kheng valleys to the healing mantras of central Bhutan,
                  YakVibes records these artists side by side — so a listener anywhere in the world can sit in
                  the same room as the tradition.
                </p>
                <button
                  onClick={() => onNavigate("home", "music")}
                  className="mt-6 inline-flex items-center gap-2.5 rounded-lg border-2 border-burgundy px-6 py-3 font-display font-semibold text-burgundy transition duration-300 hover:bg-burgundy hover:text-cream"
                >
                  Back to the Music Library <ArrowRightIcon className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Hear Them Chant"
        body="Every week, a new chant, folk song, or cultural story lands on the YakVibes channel. Pull up a cushion, press play, and listen."
        label="Subscribe on YouTube"
      />
    </>
  );
}
