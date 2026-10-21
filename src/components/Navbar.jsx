import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const resumeUrl =
    "https://drive.google.com/file/d/1Zh_3eU_zqhU-b_XmAeRy3iW81JSEILFn/view?usp=sharing";

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 sm:top-5 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[92%] max-w-[1000px] h-14 sm:h-16 md:h-[72px] rounded-full border border-white/[0.08] bg-[#101214]/90 backdrop-blur-[14px] shadow-2xl shadow-black/60 flex items-center px-4 sm:px-6 justify-between"
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#17191c] border border-white/10 flex items-center justify-center text-[#23B08A] font-bold text-xs sm:text-sm group-hover:border-[#23B08A] transition-colors">
            A
          </span>
          <span className="font-bold text-base sm:text-lg text-white tracking-tight">
            Ahmad<span className="text-[#23B08A]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Global Navigation"
          className="hidden md:flex items-center gap-1.5 text-sm font-medium"
        >
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop/Tablet Resume Pill */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#23B08A]/10 text-[#23B08A] border border-[#23B08A]/40 hover:bg-[#23B08A] hover:text-[#04110D] transition-all duration-200 active:scale-95 min-h-[40px] sm:min-h-[44px]"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="md:hidden w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-[#23B08A]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer Dropdown inside header coordinate space */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-[calc(100%+10px)] left-0 right-0 bg-[#101214]/98 backdrop-blur-2xl rounded-[24px] border border-white/[0.1] p-4 shadow-2xl shadow-black/95 flex flex-col gap-1.5 z-50 text-left"
            >
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`min-h-[44px] flex items-center px-4 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#23B08A]/15 text-[#23B08A] font-semibold border border-[#23B08A]/30"
                        : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile-only Resume Link at bottom of drawer */}
              <div className="pt-2 mt-1 border-t border-white/[0.08]">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-4 rounded-xl text-sm font-semibold bg-[#23B08A] text-[#04110D] hover:bg-[#1d9c7b] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop overlay to close mobile drawer on tap outside */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden cursor-pointer"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
