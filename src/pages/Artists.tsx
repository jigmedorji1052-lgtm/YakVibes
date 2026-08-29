import type { Route } from "../components/Nav";
import CtaBand from "../components/CtaBand";
import Mantra from "../components/Mantra";
import Reveal from "../components/Reveal";
import { ArrowRightIcon, ExternalIcon } from "../components/icons";
import { IMAGES, LINKS, artists, type Artist } from "../data";

type PageProps = {
  onNavigate: (page: Route, section?: string) => void;
};

const stats: Array<[string, string]> = [
  ["4", "voices, one mission"],
  ["30+", "mantras & folk songs recorded"],
  ["1", "shared mission — preservation"],
];

/* Each button label matches its real destination — never a mismatched link. */
const artistButtons: Record<string, { label: string; href: string }> = {
  "kheng-sonam-dorji": { label: "Listen on YouTube", href: LINKS.youtube },
  "pinaka-chakraborty": { label: "Listen on YouTube", href: LINKS.youtube },
  "ganga-ram": { label: "Listen on YouTube", href: LINKS.youtube },
  "sobit-singh": { label: "Listen on YouTube", href: LINKS.youtube },
};

function ArtistProfile({ artist, flip = false }: { artist: Artist; flip?: boolean }) {
  const cta = artistButtons[artist.id] ?? { label: "Listen on YouTube", href: LINKS.youtube };
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
                    loading="lazy"
                    className="w-full rounded-lg object-cover shadow-[22px_22px_0_#D97706] transition duration-700 ease-out hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-16">
                    <p className="font-display text-lg font-bold text-cream">{artist.name}</p>
                    <p className="font-body text-sm italic text-cream/80">{artist.tagline}</p>
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
              <p className="mt-2 font-body italic leading-relaxed text-ink-soft">{artist.tagline}</p>

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

              {artist.quote && (
                <blockquote className="mt-10 border-l-4 border-gold pl-5">
                  <p className="font-body text-lg italic leading-relaxed text-burgundy">
                    &ldquo;{artist.quote}&rdquo;
                  </p>
                  <footer className="mt-2.5 font-display text-[0.68rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                    — {artist.name}, in conversation with YakVibes
                  </footer>
                </blockquote>
              )}

              {/* Recordings / highlights */}
              <div className="mt-11">
                <div className="flex flex-wrap items-end justify-between gap-2 border-b-2 border-burgundy/80 pb-2.5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.26em] text-burgundy">
                    {artist.listLabel}
                  </h3>
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs font-semibold text-ink-soft transition-colors duration-300 hover:text-saffron"
                  >
                    {artist.listNote} ↗
                  </a>
                </div>
                <ul className="divide-y divide-ink/10">
                  {artist.discography.map((item, i) => (
                    <li key={item.title} className="flex items-center gap-4 py-3.5">
                      <span className="w-7 shrink-0 font-display text-sm font-bold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display font-semibold text-ink">{item.title}</span>
                        <span className="block truncate font-body text-sm italic text-ink-soft">{item.note}</span>
                      </span>
                      {item.duration && (
                        <span className="hidden shrink-0 font-display text-xs font-semibold tracking-[0.15em] text-ink-soft sm:block">
                          {item.duration}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${cta.label} — ${artist.name}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-saffron px-6 py-3 font-display font-semibold text-white shadow-md shadow-saffron/25 transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
              >
                {cta.label} <ExternalIcon className="h-4 w-4" />
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
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.artistsHero}
            alt="Misty Bhutanese valley with terraced fields, prayer flags and a dzong at dawn"
            className="kenburns h-full w-full object-cover object-center"
          />
        </div>
        {/* Left-to-right scrim so text stays readable over the dzong */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(26,15,10,0.82) 0%, rgba(26,15,10,0.55) 45%, rgba(26,15,10,0.35) 100%)",
          }}
        />
        {/* Subtle bottom fade to seat the stats */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-36 sm:pb-40 md:py-32 md:pb-36">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/80" aria-hidden="true" />
              <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.42em] text-gold [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                The Artists
              </p>
            </div>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.05] text-cream [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
              The Voices Behind <em className="font-body font-medium italic text-gold">the Vibes</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
              Four musicians. Two traditions. One promise — that the songs of Bhutan reach the next
              generation exactly as the valleys taught them.
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

      {/* ---------- Profiles 01 & 02 ---------- */}
      <ArtistProfile artist={artists[0]} />
      <ArtistProfile artist={artists[1]} flip />

      <Mantra />

      {/* ---------- Profiles 03 & 04 ---------- */}
      <ArtistProfile artist={artists[2]} />
      <ArtistProfile artist={artists[3]} flip />

      {/* ---------- Together ---------- */}
      <section className="relative bg-paper py-20 md:py-24">
        <div className="texture-dots-dark absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
              <div className="flex shrink-0">
                {artists.map((artist, i) => (
                  <img
                    key={artist.id}
                    src={artist.portrait}
                    alt={artist.name}
                    loading="lazy"
                    className={`h-24 w-24 rounded-full border-4 border-cream object-cover shadow-xl transition duration-500 hover:-translate-y-1.5 hover:z-10 md:h-28 md:w-28 ${
                      i > 0 ? "-ml-8" : ""
                    } ${i % 2 === 1 ? "mt-7" : ""}`}
                  />
                ))}
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-saffron">
                  One Studio · One Purpose
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Four Voices, One Promise</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  From the drangyen of the Kheng valleys and the tabla carried from Kolkata, to the strings of
                  the Himalayas and a bassline built for today — YakVibes records these four musicians side by
                  side, so a listener anywhere in the world can sit in the same room as the tradition.
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
        title="Hear Them Play"
        body="Every week, new mantras, folk songs, and cultural stories land on the YakVibes channel. Pull up a cushion, press play, and listen."
        label="Subscribe on YouTube"
      />
    </>
  );
}
