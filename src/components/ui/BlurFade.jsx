import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

/**
 * BlurFade - Inspired by Magic UI (https://magicui.design/docs/components/blur-fade)
 * Staggered scroll-reveal component combining subtle blur reduction with smooth opacity entrance.
 */
const BlurFade = ({
  children,
  className = "",
  variant = {
    hidden: { y: 16, opacity: 0, filter: "blur(6px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  },
  duration = 0.45,
  delay = 0,
  offset = 12,
  direction = "down",
  inView = true,
  inViewMargin = "-50px",
  ...props
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: "blur(6px)",
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

BlurFade.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.shape({
    hidden: PropTypes.object,
    visible: PropTypes.object,
  }),
  duration: PropTypes.number,
  delay: PropTypes.number,
  offset: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  inView: PropTypes.bool,
  inViewMargin: PropTypes.string,
};

export default BlurFade;
