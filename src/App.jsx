import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects";
import About from "./components/AboutUS";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router>
      <div className="relative w-full overflow-hidden flex flex-col font-sans text-gray-200">
        <div className="fixed inset-0 z-[100] pointer-events-none mix-blend-soft-light opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        {/* Navigation */}
        <Navbar />

        {/* Main Content - Single Page Layout */}
        <main className="relative z-10 w-full flex-grow">
          <ScrollToTop />

          <section id="home">
            <Herosection />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-[#050505]">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
            <div className="text-2xl font-bold font-display text-white mb-4 tracking-tight">A.N.A</div>
            <p className="mb-2 tracking-wide">© {new Date().getFullYear()} Ahmad Nur Ain. All rights reserved.</p>
            <p className="opacity-60 text-xs">Crafting minimal digital experiences.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
