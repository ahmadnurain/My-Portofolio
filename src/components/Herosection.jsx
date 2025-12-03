import { useState } from "react";
import { MdContentCopy, MdCheck, MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CodeTyping from "./animations/CodeTyping";
import Squares from "../blocks/Backgrounds/Squares/Squares";

const Herosection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ahmadnurain82@gmail.com";
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Squares speed={0.1} squareSize={50} direction="diagonal" borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-16 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-cyan-400 font-mono text-lg mb-2">Hi there, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Ahmad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Nur Ain</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A passionate <span className="text-white font-semibold">Fullstack Developer</span> crafting modern, high-performance web applications with a focus on user experience.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleCopy}
              className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {copied ? <MdCheck className="text-green-400" /> : <MdContentCopy className="text-gray-400" />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Code Animation */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full opacity-40 pointer-events-none" />

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full max-w-lg">
            <CodeTyping />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
