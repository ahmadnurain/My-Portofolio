import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center mt-6 px-4 md:px-0`}>
      <div className={`transition-all duration-500 max-w-4xl w-full mx-auto flex items-center justify-between px-6 py-3 rounded-full border ${
        scrolled ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent border-transparent"
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-9 h-9 rounded-full bg-white text-black flex flex-col items-center justify-center font-display font-bold text-lg leading-none tracking-tighter">
            <span>A</span>
          </div>
          <span className="text-lg font-bold font-display tracking-wide text-white hidden sm:block">Ahmad.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex bg-white/5 rounded-full px-2 py-1 items-center gap-2 border border-white/5 relative z-10">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} smooth={true} duration={800} spy={true} offset={-80} 
                activeClass="!text-white !bg-white/15 shadow-[0_0_20px_rgba(5,150,105,0.5)] border-brand-green/30 font-semibold"
                className="text-sm text-gray-400 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 border border-transparent">
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank")}
            className="text-sm px-6 py-2.5 bg-brand-green/20 hover:bg-brand-green border border-brand-green/30 hover:border-brand-green rounded-full text-white font-medium shadow-[0_0_15px_rgba(5,150,105,0.3)] hover:shadow-[0_0_25px_rgba(5,150,105,0.6)] transition-all duration-300"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:bg-white/10 rounded-full p-2 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-[calc(100%+10px)] max-w-[calc(100%-2rem)] mx-auto w-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-2xl border border-white/10 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 opacity-100 py-6 shadow-2xl" : "max-h-0 opacity-0 py-0"}`}>
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={800} offset={-80} onClick={() => setIsOpen(false)} 
              className="text-xl text-gray-300 hover:text-white font-medium cursor-pointer transition-colors w-full text-center py-2">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 w-3/4 flex justify-center">
            <button
              onClick={() => {
                window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank");
                setIsOpen(false);
              }}
              className="w-full max-w-[200px] px-6 py-3 bg-brand-green hover:bg-brand-green/80 rounded-full text-white font-bold transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
