import { IMAGES, LINKS, mantraLine } from "../data";
import type { Route } from "./Nav";
import { FacebookIcon, KnotMark, MailIcon, YoutubeIcon } from "./icons";

type FooterProps = {
  onNavigate: (page: Route, section?: string) => void;
};

/* Email address assembled from character codes (same codes as HTML entities
   &#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#121;&#97;&#107;&#118;&#105;&#98;&#101;&#115;&#46;&#98;&#116;)
   so the literal address never appears in the source for spam bots to scrape.
   Browsers don't decode entities inside JSX href attributes, hence this form. */
const EMAIL_ADDRESS = String.fromCharCode(
  99, 111, 110, 116, 97, 99, 116, 64, 121, 97, 107, 118, 105, 98, 101, 115, 46, 98, 116
);
const MAILTO_HREF = `mailto:${EMAIL_ADDRESS}`;

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

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8 md:pb-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={IMAGES.logo}
              alt="YakVibes Bhutan logo"
              loading="lazy"
              className="mb-4 max-h-10 w-auto object-contain [filter:drop-shadow(0_0_14px_rgba(253,251,247,0.35))]"
            />
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
                rel="noopener noreferrer"
                aria-label="YakVibes on Facebook"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YakVibes on YouTube"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <YoutubeIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={MAILTO_HREF}
                aria-label="Email us"
                className="grid h-10 w-10 place-items-center rounded-lg border border-cream/25 text-cream/85 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy"
              >
                <MailIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#F59E0B]">Explore</h4>
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
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#F59E0B]">Connect</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                  Facebook
                </a>
              </li>
              <li>
                <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                  YouTube
                </a>
              </li>
              <li>
                <a href={MAILTO_HREF} className="transition-colors hover:text-gold">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/60 sm:flex-row">
          <p>© 2026 YakVibes Bhutan. All rights reserved.</p>
          <p className="font-tibetan text-[#F59E0B]/90">{mantraLine}</p>
        </div>
      </div>
    </footer>
  );
}
