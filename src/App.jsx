import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

// Code splitting: Load route pages on-demand to keep initial bundle tiny and fast
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));

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
      "https://drive.google.com/file/d/1Umr-i8VQbLUF4gqKKZcGrVMKxn0sDYtx/view?usp=sharing";
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
      <p>Redirecting to Resume...</p>
    </div>
  );
};

// Minimal lightweight loader fallback during route transitions
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-[#23B08A]/30 border-t-[#23B08A] rounded-full animate-spin" />
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTopOnRoute />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#050607] text-[#dee4df] font-sans antialiased selection:bg-[#23B08A]/30 selection:text-white">
        {/* Static, high-performance background grid and subtle ambient aura (no repaint loops) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 animated-grid-bg" />
          <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#23B08A]/[0.035] rounded-full blur-[90px] pointer-events-none" />
        </div>

        {/* Floating Capsule Navbar */}
        <Navbar />

        {/* Routes wrapped in Suspense for instant on-demand loading */}
        <div className="relative z-10 flex-1 flex flex-col">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<ResumeRedirect />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        {/* Compact Clean Developer Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
