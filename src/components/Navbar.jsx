import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll"; // Using react-scroll for smooth scrolling in SPA

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-black font-bold font-mono text-xl">&lt;/&gt;</div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hidden sm:block">Ahmad Nur Ain</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={800} spy={true} offset={-80} className="text-gray-300 hover:text-cyan-400 font-medium cursor-pointer transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button
            onClick={() => window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank")}
            className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={800} offset={-80} onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-cyan-400 font-medium cursor-pointer">
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank");
              setIsOpen(false);
            }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/20"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
