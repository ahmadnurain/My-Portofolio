import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Experience", to: "/experience" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const resumeUrl = "https://drive.google.com/file/d/1Umr-i8VQbLUF4gqKKZcGrVMKxn0sDYtx/view?usp=sharing";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1000px] h-[72px] rounded-full border border-white/[0.08] bg-[#101214]/90 backdrop-blur-[14px] shadow-2xl shadow-black/60 flex items-center px-6 justify-between"
    >
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <span className="w-9 h-9 rounded-full bg-[#17191c] border border-white/10 flex items-center justify-center text-[#23B08A] font-bold text-sm group-hover:border-[#23B08A] transition-colors">
          A
        </span>
        <span className="font-bold text-lg text-white tracking-tight">
          Ahmad<span className="text-[#23B08A]">.</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav aria-label="Global Navigation" className="hidden md:flex items-center gap-1.5 text-sm font-medium">
        {navLinks.map((link) => {
          const active = isActive(link.to);
          return (
            <Link
              key={link.name}
              to={link.to}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                active
                  ? "bg-white/[0.06] text-white font-medium"
                  : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Action / Resume & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#23B08A]/10 text-[#23B08A] border border-[#23B08A]/40 hover:bg-[#23B08A] hover:text-[#04110D] transition-all duration-200 active:scale-95 min-h-[44px]"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden text-gray-300 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-[#101214]/95 backdrop-blur-[16px] rounded-[24px] border border-white/[0.08] p-5 shadow-2xl shadow-black/80 flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`min-h-[44px] flex items-center px-4 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/[0.08] text-white font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
