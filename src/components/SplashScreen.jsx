import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // Smooth progress counter from 0 to 100 over ~1200ms
    const startTime = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Pause briefly once fully filled, then trigger curtain opening
        setTimeout(() => {
          setIsOpening(true);
        }, 180);

        // Complete animation and unmount
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 1100);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Click anywhere to immediately skip and open
  const handleSkip = () => {
    if (!isOpening) {
      setProgress(100);
      setIsOpening(true);
      setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }, 750);
    }
  };

  if (isFinished) return null;

  // Reusable typography layer with stroke background and filled foreground
  const renderTypography = () => (
    <div className="relative inline-block select-none text-center px-4">
      {/* 1. Base Stroke Outline (Transparent Fill with Outline) */}
      <span
        className="block font-black tracking-tighter uppercase text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        style={{
          WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.28)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        AHMAD NUR&apos;AIN
      </span>

      {/* 2. Loading Fill Layer (Progressively fills the text with signature color) */}
      <span
        className="absolute inset-0 block font-black tracking-tighter uppercase text-[#23B08A] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl pointer-events-none transition-all duration-75"
        style={{
          clipPath: `inset(0 ${100 - progress}% 0 0)`,
          WebkitTextStroke: "1.5px #23B08A",
          filter: "drop-shadow(0 0 20px rgba(35, 176, 138, 0.45))",
          fontFamily: "Inter, sans-serif",
        }}
      >
        AHMAD NUR&apos;AIN
      </span>
    </div>
  );

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] pointer-events-auto cursor-pointer select-none overflow-hidden"
      role="dialog"
      aria-label="Welcome Reveal"
    >
      {/* TOP HALF SHUTTER (Moves UP on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "-100%" : 0 }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#050607] overflow-hidden z-10"
      >
        {/* Inner full-height container matching exact screen coordinates */}
        <div className="absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center">
          {renderTypography()}
        </div>
      </motion.div>

      {/* BOTTOM HALF SHUTTER (Moves DOWN on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "100%" : 0 }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#050607] overflow-hidden z-10"
      >
        {/* Inner full-height container matching exact screen coordinates */}
        <div className="absolute bottom-0 left-0 w-full h-[100vh] flex items-center justify-center">
          {renderTypography()}
        </div>
      </motion.div>
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func,
};

export default SplashScreen;
