import { LINKS } from "../data";
import Reveal from "./Reveal";
import { YoutubeIcon } from "./icons";

type CtaBandProps = {
  title: string;
  body: string;
  label: string;
};

export default function CtaBand({ title, body, label }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-burgundy text-center text-cream">
      <div className="texture-dots-light absolute inset-0 opacity-50" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -right-6 -top-28 select-none font-tibetan text-[13rem] leading-none text-gold/10"
        aria-hidden="true"
      >
        ༀ
      </span>
      <div className="relative mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-[#F59E0B]">Join the Circle</p>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold text-cream">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/80">{body}</p>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-lg bg-gold px-7 py-3.5 font-display font-semibold text-ink shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#b45309] hover:text-cream"
          >
            {label} <YoutubeIcon className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
