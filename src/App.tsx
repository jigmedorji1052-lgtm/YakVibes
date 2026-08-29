import { useCallback, useEffect, useRef, useState } from "react";
import Nav, { type Route } from "./components/Nav";
import Footer from "./components/Footer";
import ListeningRoom from "./components/ListeningRoom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";

function readRoute(): Route {
  return window.location.hash.startsWith("#/artists") ? "artists" : "home";
}

export default function App() {
  const [route, setRoute] = useState<Route>(readRoute);
  const pendingSection = useRef<string | null>(null);

  // Image protection: suppress the right-click menu only when it targets an
  // image, so "Open image in new tab" is never offered. All other context
  // menus behave normally.
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("img")) e.preventDefault();
    };
    document.addEventListener("contextmenu", onContextMenu);
    return () => document.removeEventListener("contextmenu", onContextMenu);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const next = readRoute();
      setRoute(next);
      if (!pendingSection.current) window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (pendingSection.current) {
      const id = pendingSection.current;
      pendingSection.current = null;
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 90);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route]);

  const navigate = useCallback((page: Route, section?: string) => {
    const current = readRoute();
    if (current === page) {
      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    pendingSection.current = section ?? null;
    window.location.hash = page === "artists" ? "#/artists" : "#/";
  }, []);

  return (
    <div className="relative min-h-screen bg-cream font-body text-ink">
      {/* Accessibility: skip straight to the page content */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          if (main) {
            main.setAttribute("tabindex", "-1");
            main.focus({ preventScroll: false });
            main.scrollIntoView();
          }
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1100] focus:rounded-lg focus:bg-saffron focus:px-5 focus:py-3 focus:font-display focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      {/* Ambient layered background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(58rem 40rem at 88% -8%, rgba(217,119,6,0.09), transparent 62%), radial-gradient(48rem 34rem at -12% 34%, rgba(127,29,29,0.07), transparent 60%), radial-gradient(42rem 30rem at 72% 112%, rgba(194,65,12,0.06), transparent 65%)",
        }}
      />

      <Nav route={route} onNavigate={navigate} />
      <main id="main-content" className="outline-none">
        {route === "home" ? <Home onNavigate={navigate} /> : <Artists onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
      <ListeningRoom />
    </div>
  );
}
