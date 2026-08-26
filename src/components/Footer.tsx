import { LINKS, mantraLine } from "../data";
import type { Route } from "./Nav";
import { FacebookIcon, KnotMark, MailIcon, YoutubeIcon } from "./icons";

type FooterProps = {
  onNavigate: (page: Route, section?: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-burgundy text-cream">
      <div className="texture-dots-light absolute inset-0 opacity-50" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -bottom-24 -right-8 select-none font-tibetan text-[15rem] leading-none text-cream/[0.05]"
        aria-hidden="true"
      >
        ༀ
      </span>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-cream/10 text-gold">
                <KnotMark className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-extrabold text-cream">
                YakVibes <span className="text-gold">Bhutan</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-cream/75">
              Preserving spiritual heritage through authentic music and cultural storytelling — from the
              Kingdom in the Clouds to your listening room.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="YakVibes on Facebook"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YakVibes on YouTube"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <YoutubeIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKS.email}
                aria-label="Email YakVibes"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <MailIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <button onClick={() => onNavigate("home", "music")} className="transition-colors hover:text-gold">
                  Music Library
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("artists")} className="transition-colors hover:text-gold">
                  Featured Artists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", "culture")} className="transition-colors hover:text-gold">
                  Cultural Heritage
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">Connect</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={LINKS.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                  Facebook
                </a>
              </li>
              <li>
                <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                  YouTube
                </a>
              </li>
              <li>
                <a href={LINKS.email} className="transition-colors hover:text-gold">
                  contact@yakvibes.bt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/60 sm:flex-row">
          <p>© 2026 YakVibes Bhutan. All rights reserved. Designed with intention.</p>
          <p className="font-tibetan text-gold/80">{mantraLine}</p>
        </div>
      </div>
    </footer>
  );
}
