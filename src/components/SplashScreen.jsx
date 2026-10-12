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

    // Trigger GPU-accelerated CSS clip-path fill shortly after mount
    const fillTimer = setTimeout(() => {
      setFilled(true);
    }, 60);

    // After fill completes (~1100ms), trigger horizontal split opening
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1150);

    // Complete reveal and restore scroll
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 1900);

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
      }, 650);
    }
  };

  if (isFinished) return null;

  // Lightweight typography with fluid clamp so text never wraps or overflows on mobile
  const renderTypography = () => (
    <div className="relative inline-flex items-center justify-center select-none text-center px-4 max-w-full">
      {/* 1. Base Stroke Outline (Transparent Fill with Crisp Outline) */}
      <span
        className="block font-black tracking-tight uppercase text-transparent whitespace-nowrap text-[clamp(1.75rem,7vw,6.5rem)] leading-none select-none"
        style={{
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        AHMAD NUR&apos;AIN
      </span>

      {/* 2. Hardware-accelerated Fill Layer (Smooth GPU transition, zero React re-render lag) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-black tracking-tight uppercase text-[#23B08A] whitespace-nowrap select-none pointer-events-none text-[clamp(1.75rem,7vw,6.5rem)] leading-none"
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
  );

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] pointer-events-auto cursor-pointer select-none overflow-hidden touch-none"
      role="dialog"
      aria-label="Welcome Reveal"
    >
      {/* TOP HALF SHUTTER (Moves UP on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "-100%" : 0 }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 left-0 w-full h-[50dvh] min-h-[50vh] bg-[#050607] overflow-hidden z-10 will-change-transform"
      >
        {/* Inner full-height container matching exact screen coordinates */}
        <div className="absolute top-0 left-0 w-full h-[100dvh] min-h-[100vh] flex items-center justify-center">
          {renderTypography()}
        </div>
      </motion.div>

      {/* BOTTOM HALF SHUTTER (Moves DOWN on open) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "100%" : 0 }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute bottom-0 left-0 w-full h-[50dvh] min-h-[50vh] bg-[#050607] overflow-hidden z-10 will-change-transform"
      >
        {/* Inner full-height container matching exact screen coordinates */}
        <div className="absolute bottom-0 left-0 w-full h-[100dvh] min-h-[100vh] flex items-center justify-center">
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
