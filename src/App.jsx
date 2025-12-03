import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects";
import About from "./components/AboutUS";
import ScrollToTop from "./components/ScrollToTop";
import FloatingBinary from "./components/animations/FloatingBinary";
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
      <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500/30 relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Main Content - Single Page Layout */}
        <main className="relative z-10">
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
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-500 text-sm bg-black/50 backdrop-blur-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Ahmad Nur Ain. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind & Passion.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
