import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects";
import About from "./components/about";
// import Contact from "./components/Contact";
import { MdMenu, MdClose } from "react-icons/md";

function App() {
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
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg shadow-md z-50 md:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <h1 className="text-white text-xl font-semibold">My Portfolio</h1>
          <button className="text-white text-3xl p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition duration-300" onClick={() => setIsOpen(!isOpen)}>
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
