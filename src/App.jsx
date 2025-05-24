import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects";
import About from "./components/AboutUS";
// import Contact from "./components/Contact";
import { MdMenu, MdClose } from "react-icons/md";
import ScrollToTop from "./components/ScrollToTop"; // pastikan path-nya sesuai
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true, // animasi hanya terjadi sekali
    });
  }, []);
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-stone-950 min-h-screen flex">
      {/* Tombol Menu di Mobile */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg  shadow-md shadow-blue-500/10 z-50 md:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-xl font-semibold">My Portfolio</h1>
          <button className="text-cyan-500 text-3xl p-2 rounded-lg bg-black/50 border border-white/20 hover:inset-0 hover:bg-gradient-to-r from-blue-600/20 to-cyan-600/20 transition duration-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      {/* Sidebar Sticky di Kiri */}
      <div
        className={`fixed top-0 left-0 h-full w-[21.5rem] bg-black p-5 shadow-md z-50 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar onClose={() => setIsOpen(false)} />
      </div>

      {/* Konten utama tetap di samping kanan */}
      <div className="flex-1 ml-0 md:ml-[21.5rem] p-5">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
