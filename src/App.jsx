import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ResumeRedirect = () => {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1YR74DQc5j0UB0gzCUXywt-vm-kDKnvIK/view?usp=sharing";
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
      <p>Redirecting to Resume...</p>
    </div>
  );
};

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
      <ScrollToTopOnRoute />
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#050607] text-[#dee4df] font-sans antialiased selection:bg-[#23B08A]/30 selection:text-white">
        {/* Subtle Animated Background Grid & Ambient Glow for all pages */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 animated-grid-bg" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#23B08A] rounded-full blur-[140px] pointer-events-none ambient-glow-anim" />
        </div>

        {/* Floating Capsule Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="relative z-10 flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/experience"
              element={<Experience />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route path="/resume" element={<ResumeRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Compact Clean Developer Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
