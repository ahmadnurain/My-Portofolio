import { useState } from "react";
import { MdContentCopy, MdCheck, MdArrowRightAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Squares from "../blocks/Backgrounds/Squares/Squares";

const Herosection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ahmadnurain82@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Squares speed={0.05} squareSize={40} direction="diagonal" borderColor="#111" hoverFillColor="#1a1a1a" />
      </div>

      {/* Gradient Orbs for atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-16 z-10 flex flex-col items-center text-center mt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-semibold text-brand-green mb-8 tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(5,150,105,0.1)]">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Available for hire
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-display tracking-tighter leading-[0.9] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-brand-green/40">Welcome to my</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green/80 to-brand-blue">Portfolio.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl md:max-w-xl mx-auto leading-relaxed mb-12 font-light">
            I'm <span className="text-brand-green font-semibold">Ahmad Nur Ain</span>. I build exceptional digital experiences with a focus on modern design and high-performance engineering.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-3"
          >
            Explore Work
            <MdArrowRightAlt size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>

          <a
            href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 backdrop-blur-md border border-[#0a66c2]/30 text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaLinkedin className="text-[#0a66c2]" size={18} />
            <span>Connect</span>
          </a>

          <button
            onClick={handleCopy}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3"
          >
            {copied ? <MdCheck className="text-brand-green" size={18} /> : <MdContentCopy className="text-gray-400" size={18} />}
            <span>{copied ? "Copied" : email}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
