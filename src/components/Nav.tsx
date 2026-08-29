import { useEffect, useState } from "react";
import { IMAGES } from "../data";
import { CloseIcon, MenuIcon, PlayIcon } from "./icons";

export type Route = "home" | "artists";

type NavProps = {
  route: Route;
  onNavigate: (page: Route, section?: string) => void;
};

export default function Nav({ route, onNavigate }: NavProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll-spy: keep the nav highlight on the section currently in view (Home page).
  useEffect(() => {
    if (route !== "home") return;
    const ids = ["home", "music", "artists", "culture"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [route]);

  const go = (page: Route, section?: string) => {
    setOpen(false);
    onNavigate(page, section);
  };

  // "Listen Now" opens the on-site Listening Room panel — no external navigation.
  const openListeningRoom = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("lr:open"));
  };

  const linkCls = (active: boolean) =>
    `font-display text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-saffron ${
      active ? "text-saffron underline decoration-gold decoration-2 underline-offset-8" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <button onClick={() => go("home")} className="group flex items-center text-left" aria-label="YakVibes Bhutan — home">
          <img
            src={IMAGES.logo}
            alt="YakVibes Bhutan logo"
            className="h-9 w-auto max-h-9 object-contain transition duration-300 group-hover:scale-[1.03] md:h-12 md:max-h-12"
          />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => go("home")} className={linkCls(route === "home" && activeSection === "home")}>
            Home
          </button>
          <button onClick={() => go("home", "music")} className={linkCls(route === "home" && activeSection === "music")}>
            Music
          </button>
          <button onClick={() => go("artists")} className={linkCls(route === "artists")}>
            Artists
          </button>
          <button onClick={() => go("home", "culture")} className={linkCls(route === "home" && activeSection === "culture")}>
            Culture
          </button>
          <button
            onClick={openListeningRoom}
            className="inline-flex items-center gap-2 rounded-lg bg-saffron px-4 py-2.5 font-display text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
          >
            Listen Now <PlayIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/15 text-ink transition hover:border-saffron hover:text-saffron md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-5 pb-6 pt-3 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            <button onClick={() => go("home")} className="rounded-lg px-3 py-2.5 text-left font-display font-semibold text-ink transition hover:bg-cream hover:text-saffron">
              Home
            </button>
            <button onClick={() => go("home", "music")} className="rounded-lg px-3 py-2.5 text-left font-display font-semibold text-ink transition hover:bg-cream hover:text-saffron">
              Music
            </button>
            <button onClick={() => go("artists")} className="rounded-lg px-3 py-2.5 text-left font-display font-semibold text-ink transition hover:bg-cream hover:text-saffron">
              Artists
            </button>
            <button onClick={() => go("home", "culture")} className="rounded-lg px-3 py-2.5 text-left font-display font-semibold text-ink transition hover:bg-cream hover:text-saffron">
              Culture
            </button>
            <button
              onClick={openListeningRoom}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-saffron px-4 py-3 font-display font-semibold text-white transition hover:bg-saffron-deep"
            >
              Listen Now <PlayIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
