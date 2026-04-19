import { useState, useRef } from "react";
import { MdContentCopy, MdCheck, MdArrowRightAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Squares from "../blocks/Backgrounds/Squares/Squares";

const Herosection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ahmadnurain82@gmail.com";

  // 3D Card Hover Effect setup
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Squares speed={0.05} squareSize={40} direction="diagonal" borderColor="#111" hoverFillColor="#1a1a1a" />
      </div>

      {/* Gradient Orbs for atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 z-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-start text-left max-w-2xl">
            {/* Profile Avatar & Badge Group */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 tracking-wider uppercase backdrop-blur-sm h-fit">Available for hire</div>
            </div>

            {/* Typography matching modern layout */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[3rem] xl:text-[4rem] font-bold tracking-tighter leading-[1.05] mb-6 text-white font-sans">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-brand-green/80">Ahmad Nur Ain.</span>
            </h1>

            {/* Subtitle/Stats matching layout */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-gray-400 text-sm md:text-base mb-6 font-medium">
              <span className="text-brand-green font-semibold">Software Engineer</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>Full Stack & Cyber Security</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>Informatics Student</span>
            </div>

            <p className="text-gray-400 max-w-lg mb-10 text-sm md:text-base leading-relaxed">
              Saya adalah mahasiswa Informatika yang antusias membangun solusi digital dari mulai backend hingga frontend. Berpengalaman menangani berbagai project pengembangan web dan memiliki hobi yang mendalam pada keamanan siber
              (security).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 bg-white text-black hover:bg-gray-200 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                See Work
              </button>

              <a
                href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 backdrop-blur-md border border-[#0a66c2]/30 text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaLinkedin className="text-[#0a66c2]" size={18} />
                <span>Connect</span>
              </a>

              <button
                onClick={handleCopy}
                className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3"
              >
                {copied ? <MdCheck size={18} /> : <MdContentCopy size={18} className="text-gray-400" />}
                <span>{copied ? "Address Copied" : "Let's Chat"}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive ID Card / Visual */}
          <div className="hidden lg:flex justify-center xl:justify-end items-center relative lg:h-[600px] perspective-[1200px]">
            {/* Floating Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.2 },
                scale: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 },
              }}
              className="relative flex flex-col items-center"
            >
              {/* Lanyard Strap */}
              <div className="hidden lg:block w-[2px] h-[90px] bg-gradient-to-b from-transparent via-white/10 to-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

              {/* Lanyard Clip */}
              <div className="hidden lg:block w-4 h-6 border-2 border-white/40 rounded-md -mt-1 z-10 bg-black/50 backdrop-blur-md"></div>

              {/* The 3D Card */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-[2rem] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-5 md:p-7 flex flex-col justify-between overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] cursor-grab active:cursor-grabbing z-20 mt-6 lg:mt-0"
              >
                {/* Glass glare effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-80 pointer-events-none rounded-[2rem]"></div>

                {/* Internal Noise texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

                {/* Card Header */}
                <div className="flex justify-between items-start z-10 relative" style={{ transform: "translateZ(30px)" }}>
                  <div>
                    <h3 className="text-white/80 font-bold tracking-widest text-[10px] uppercase">Identity Card</h3>
                    <p className="text-white/40 text-[9px] uppercase mt-1">Access: Full Stack</p>
                  </div>
                </div>

                {/* Card Image / Avatar area */}
                <div
                  className="w-full aspect-[4/5] rounded-[1.25rem] overflow-hidden relative z-10 mt-6 border border-white/5 bg-[#050505] group-hover:border-white/20 transition-all duration-500 shadow-inner"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {/* Photo Profile */}
                  <img
                    src="/IMG_5sw456.JPG"
                    alt="Ahmad Nur Ain"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if IMG_5sw456.JPG isn't the correct profile picture
                      e.target.src = "/erasebg-transformed.webp";
                    }}
                  />
                  {/* Subtle overlay for depth & hacker vibe without changing the color */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent opacity-80 pointer-events-none"></div>
                </div>

                {/* Card Footer */}
                <div className="z-10 relative mt-6 flex justify-between items-end w-full" style={{ transform: "translateZ(30px)" }}>
                  <div className="flex flex-col bg-[#050505]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 shadow-lg">
                    <h2 className="text-white font-bold text-xl md:text-2xl tracking-tight">Ahmad Nur Ain</h2>
                    <p className="text-brand-green text-xs mt-0.5 font-medium tracking-wide uppercase">Full-Stack Developer</p>
                  </div>
                  {/* Digital Barcode mock */}
                  <div className="flex gap-[3px] h-8 items-end opacity-40">
                    <div className="w-1 h-[80%] bg-white rounded-t-sm"></div>
                    <div className="w-[2px] h-[100%] bg-white rounded-t-sm"></div>
                    <div className="w-[3px] h-[60%] bg-white rounded-t-sm"></div>
                    <div className="w-1 h-[90%] bg-white rounded-t-sm"></div>
                    <div className="w-[2px] h-[70%] bg-white rounded-t-sm"></div>
                    <div className="w-[4px] h-[100%] bg-white rounded-t-sm"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
