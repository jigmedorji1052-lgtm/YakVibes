import type { Route } from "../components/Nav";
import CtaBand from "../components/CtaBand";
import Mantra from "../components/Mantra";
import PrayerFlags from "../components/PrayerFlags";
import Reveal from "../components/Reveal";
import {
  ArrowRightIcon,
  DranyenIcon,
  ExternalIcon,
  FlameIcon,
  MountainIcon,
  YoutubeIcon,
} from "../components/icons";
import { IMAGES, homeTracks, team } from "../data";

type PageProps = {
  onNavigate: (page: Route, section?: string) => void;
};

const pillars = [
  {
    icon: FlameIcon,
    title: "Chants with Purpose",
    text: "Healing and longevity chants recorded slowly, the way they are meant to be received — one breath at a time.",
  },
  {
    icon: DranyenIcon,
    title: "Folk, Kept Alive",
    text: "Drangyen melodies and valley songs passed hand to hand, now preserved for the generation after next.",
  },
  {
    icon: MountainIcon,
    title: "Stories of the Valleys",
    text: "Every recording carries the place it came from — the road, the field, the monastery courtyard behind it.",
  },
];

export default function Home({ onNavigate }: PageProps) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-ink text-center">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img src={IMAGES.hero} alt="" className="kenburns h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" aria-hidden="true" />
        <PrayerFlags />
        <span
          className="pointer-events-none absolute -left-12 bottom-[-7rem] hidden select-none font-tibetan text-[18rem] leading-none text-gold/10 lg:block"
          aria-hidden="true"
        >
          ༀ
        </span>

        <div className="relative z-10 mx-auto max-w-4xl px-5 pb-28 pt-36 md:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
              <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.42em] text-gold">
                From the Kingdom in the Clouds
              </p>
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
            </div>
            <h1 className="mt-7 text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] text-cream">
              Preserving Bhutan&rsquo;s{" "}
              <em className="font-body font-medium italic text-gold">Spiritual Heritage</em> Through Music
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/85">
              Experience the tranquility of traditional chants, folk melodies, and mindful music from the
              heart of the Himalayas.
            </p>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("home", "music")}
                className="inline-flex items-center gap-2.5 rounded-lg bg-saffron px-8 py-3.5 font-display font-semibold text-white shadow-lg shadow-saffron/30 transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
              >
                Explore the Music <ArrowRightIcon className="h-4.5 w-4.5" />
              </button>
              <a
                href="https://www.youtube.com/@YakVibes_Bhutan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border-2 border-cream/80 px-8 py-3.5 font-display font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-burgundy"
              >
                Visit YouTube <ExternalIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-cream/70">
          <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.38em]">Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-cream/25">
            <span className="cue-dot absolute left-0 top-0 h-4 w-px bg-gold" />
          </span>
        </div>
      </section>

      <Mantra />

      {/* ---------- Featured Music ---------- */}
      <section id="music" className="relative scroll-mt-24 py-24 md:py-28">
        <div className="texture-dots-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-saffron">The Library</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold">Sacred Sounds &amp; Traditional Melodies</h2>
            <p className="mt-4 text-ink-soft">Press play and listen right here — no need to leave the site.</p>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {homeTracks.map((track, i) => (
              <Reveal key={track.title} delay={i * 130} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-paper shadow-[0_4px_18px_rgba(45,42,38,0.07)] ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(127,29,29,0.16)]">
                  {/* Responsive 16:9 YouTube embed */}
                  <div className="relative aspect-video w-full overflow-hidden bg-burgundy">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.videoId}`}
                      title={`${track.title} — ${track.artist}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-display text-[0.78rem] font-bold uppercase tracking-[0.2em] text-saffron">
                      {track.artist}
                    </span>
                    <h3 className="mt-1.5 text-xl font-bold">{track.title}</h3>
                    <p className="mt-2.5 flex-1 text-[0.98rem] leading-relaxed text-ink-soft">{track.description}</p>
                    <a
                      href={track.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-5 flex items-center gap-2 border-t border-ink/10 pt-4 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-soft transition-colors duration-300 hover:text-saffron"
                    >
                      <YoutubeIcon className="h-4 w-4 text-saffron" />
                      On the YakVibes Channel
                      <ExternalIcon className="ml-auto h-3.5 w-3.5 opacity-50 transition duration-300 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={120}>
            <button
              onClick={() => onNavigate("artists")}
              className="inline-flex items-center gap-2.5 font-display text-base font-bold text-burgundy underline decoration-gold decoration-2 underline-offset-8 transition duration-300 hover:text-saffron"
            >
              Meet the Voices Behind the Chants <ArrowRightIcon className="h-4.5 w-4.5" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ---------- Team / Artist Bios ---------- */}
      <section id="artists" className="relative scroll-mt-24 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-saffron">The Artists</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold">The Voices Behind the Chants</h2>
            <p className="mt-4 text-ink-soft">Meet the artists carrying Bhutan&rsquo;s musical heritage forward.</p>
          </Reveal>

          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
            {team.map((member, i) => (
              <Reveal key={member.initials} delay={i * 110} className="h-full">
                <article className="group flex h-full flex-col rounded-lg bg-paper p-8 text-center shadow-[0_4px_6px_rgba(0,0,0,0.05)] ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(127,29,29,0.14)]">
                  <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full border-4 border-gold bg-burgundy font-display text-[1.75rem] font-bold text-gold transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <span className="mb-4 mt-1.5 block font-display text-[0.9rem] font-semibold uppercase tracking-[0.05em] text-saffron">
                    {member.role}
                  </span>
                  <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Culture ---------- */}
      <section id="culture" className="relative scroll-mt-24 bg-paper py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-saffron">Our Mission</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold">More Than Music. A Cultural Bridge.</h2>
            <p className="mt-6 text-ink-soft">
              YakVibes Bhutan is dedicated to preserving the rich musical heritage of the Himalayas. From the
              legendary compositions of Kheng Sonam Dorji to the soothing chants of White Tara, we bridge
              ancient wisdom with modern accessibility.
            </p>
            <p className="mt-4 text-ink-soft">
              Every note is intentional. Every chant carries a purpose — whether for healing, meditation, or
              simply connecting with the peaceful energy of Bhutan.
            </p>

            <div className="mt-9 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="group flex items-start gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burgundy/10 text-saffron ring-1 ring-burgundy/15 transition duration-300 group-hover:bg-saffron group-hover:text-cream">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate("artists")}
              className="mt-10 inline-flex items-center gap-2.5 rounded-lg bg-saffron px-7 py-3.5 font-display font-semibold text-white shadow-md shadow-saffron/25 transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
            >
              Meet the Artists <ArrowRightIcon className="h-4.5 w-4.5" />
            </button>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative pb-6">
              <img
                src={IMAGES.cham}
                alt="A Bhutanese cham dancer in brocade silks and a carved mask"
                className="w-full rounded-lg object-cover shadow-[24px_24px_0_#D97706]"
              />
              <div className="float-soft absolute -bottom-2 -left-3 max-w-[250px] rounded-lg bg-ink px-5 py-4 text-left text-cream shadow-2xl md:-left-8">
                <p className="font-display text-[0.62rem] font-bold uppercase tracking-[0.3em] text-gold">
                  Est. in the Himalayas
                </p>
                <p className="mt-1.5 font-body text-sm italic leading-relaxed text-cream/85">
                  Where every note is intentional, and every chant carries a purpose.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bring Tranquility to Your Daily Life"
        body="Subscribe to our YouTube channel and newsletter to receive new chants, folk songs, and cultural stories directly to your inbox."
        label="Subscribe on YouTube"
      />
    </>
  );
}
