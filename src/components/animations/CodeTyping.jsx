import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BinaryDigit = ({ x, duration, delay, size }) => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.random() > 0.5 ? "1" : "0");
    }, 100 + Math.random() * 300); // Random change speed between 100ms and 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute font-mono font-bold text-cyan-500 select-none"
      style={{
        left: `${x}%`,
        fontSize: `${size}px`,
        textShadow: "0 0 5px rgba(6,182,212,0.5)",
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 450, // Move down through the container
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      {value}
    </motion.div>
  );
};

const CodeTyping = () => {
  const codeString = `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Portfolio;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => 'Ahmad Nur Ain',
            'role' => 'Fullstack Developer',
            'status' => 'Open to Work 🚀'
        ]);
    }
}`;

  const [displayedCode, setDisplayedCode] = useState("");
  const [binaryItems, setBinaryItems] = useState([]);
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Initialize Binary Rain Items
  useEffect(() => {
    const newItems = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 3 + Math.random() * 5, // Faster falling speed
      delay: Math.random() * 5,
      size: 12 + Math.random() * 10,
    }));
    setBinaryItems(newItems);
  }, []);

  // Spotlight Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-lg bg-[#1e1e1e]/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/10 group"
    >
      {/* Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.15), transparent 40%)`,
        }}
      />

      {/* Border Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.4), transparent 40%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Binary Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        {binaryItems.map((item) => (
          <BinaryDigit key={item.id} x={item.x} duration={item.duration} delay={item.delay} size={item.size} />
        ))}
      </div>

      {/* Window Header */}
      <div className="relative z-10 bg-[#252526]/80 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        <span className="ml-2 text-xs text-gray-400 font-mono">PortfolioController.php</span>
      </div>

      {/* Code Content */}
      <div className="relative z-10 p-4 font-mono text-sm md:text-base overflow-x-auto">
        <pre className="text-gray-300 leading-relaxed">
          <code dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedCode) }} />
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-5 bg-cyan-400 align-middle ml-1 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </pre>
      </div>
    </motion.div>
  );
};

// Simple syntax highlighter for PHP/Laravel
const highlightSyntax = (code) => {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\&lt;\?php)/g, '<span class="text-red-400">$1</span>')
    .replace(/(namespace|use|class|extends|public|function|return)/g, '<span class="text-purple-400">$1</span>')
    .replace(/(App\\Http\\Controllers|App\\Models\\Portfolio|PortfolioController|Controller)/g, '<span class="text-yellow-400">$1</span>')
    .replace(/(response|json)/g, '<span class="text-cyan-400">$1</span>')
    .replace(/(')([^']*)(')/g, '<span class="text-green-400">$1<span class="text-green-300">$2</span>$3</span>')
    .replace(/(=>)/g, '<span class="text-pink-400">$1</span>')
    .replace(/(\[|\]|\(|\)|\{|\}|;)/g, '<span class="text-gray-400">$1</span>');
};

export default CodeTyping;
// Force refresh
