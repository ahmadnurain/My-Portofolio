import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", x: "10%", y: "20%" },
  { Icon: FaNodeJs, color: "#339933", x: "80%", y: "15%" },
  { Icon: FaHtml5, color: "#E34F26", x: "15%", y: "70%" },
  { Icon: FaCss3Alt, color: "#1572B6", x: "85%", y: "75%" },
  { Icon: FaJs, color: "#F7DF1E", x: "50%", y: "10%" },
  { Icon: SiTailwindcss, color: "#06B6D4", x: "70%", y: "50%" },
  { Icon: SiNextdotjs, color: "#ffffff", x: "20%", y: "40%" },
  { Icon: FaGitAlt, color: "#F05032", x: "40%", y: "85%" },
  { Icon: SiVite, color: "#646CFF", x: "90%", y: "40%" },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-6xl opacity-20"
          style={{ left: item.x, top: item.y, color: item.color }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <item.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
