import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SplashScreen = ({ onComplete }) => {
  const [filled, setFilled] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // Trigger GPU-accelerated CSS fill on mount
    const fillTimer = setTimeout(() => {
      setFilled(true);
    }, 50);

    // After fill completes (~1100ms), trigger curtain opening
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1150);

    // Unmount and restore scroll after curtains fully clear
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 1850);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Click anywhere for instant skip
  const handleSkip = () => {
    if (!isOpening) {
      setFilled(true);
      setIsOpening(true);
      setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }, 600);
    }
  };

  if (isFinished) return null;

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] pointer-events-auto cursor-pointer select-none overflow-hidden touch-none"
      role="dialog"
      aria-label="Welcome Reveal"
    >
      {/* TOP HALF SHUTTER (Slides UP on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "-100%" : 0 }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050607] z-10 will-change-transform"
      />

      {/* BOTTOM HALF SHUTTER (Slides DOWN on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "100%" : 0 }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050607] z-10 will-change-transform"
      />

      {/* CENTER TYPOGRAPHY LAYER (Single, unified element with fluid clamp for 100% mobile responsiveness) */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.06 : 1,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-20 px-4"
      >
        <div className="relative select-none text-center max-w-full">
          {/* 1. Base Stroke Outline (Transparent Fill with Crisp Outline) */}
          <span
            className="block font-black tracking-tight uppercase text-transparent whitespace-nowrap text-[clamp(1.5rem,7.5vw,6rem)] select-none leading-none"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            AHMAD NUR&apos;AIN
          </span>

          {/* 2. Color Fill Layer (Fills text from left to right on GPU) */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-black tracking-tight uppercase text-[#23B08A] whitespace-nowrap select-none pointer-events-none text-[clamp(1.5rem,7.5vw,6rem)] leading-none"
            style={{
              clipPath: filled ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 1.05s cubic-bezier(0.25, 1, 0.5, 1)",
              WebkitTextStroke: "1px #23B08A",
              fontFamily: "Inter, sans-serif",
              willChange: "clip-path",
            }}
          >
            AHMAD NUR&apos;AIN
          </span>
        </div>
      </motion.div>
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func,
};

export default SplashScreen;
