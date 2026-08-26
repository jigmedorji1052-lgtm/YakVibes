import { useCallback, useEffect, useRef, useState } from "react";
import Nav, { type Route } from "./components/Nav";
import Footer from "./components/Footer";
import ListeningPill from "./components/ListeningPill";
import Home from "./pages/Home";
import Artists from "./pages/Artists";

function readRoute(): Route {
  return window.location.hash.startsWith("#/artists") ? "artists" : "home";
}

export default function App() {
  const [route, setRoute] = useState<Route>(readRoute);
  const pendingSection = useRef<string | null>(null);

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
      <main>{route === "home" ? <Home onNavigate={navigate} /> : <Artists onNavigate={navigate} />}</main>
      <Footer onNavigate={navigate} />
      <ListeningPill />
    </div>
  );
}
