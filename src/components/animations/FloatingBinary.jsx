import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingBinary = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      value: Math.random() > 0.5 ? "1" : "0",
      x: Math.random() * 100, // Random horizontal position %
      y: Math.random() * 100, // Random vertical start position %
      duration: 15 + Math.random() * 20, // Slow duration (15-35s)
      delay: Math.random() * 10, // Random delay
      size: 10 + Math.random() * 20, // Random font size
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-mono font-bold text-cyan-500/15 select-none"
          style={{
            left: `${item.x}%`,
            fontSize: `${item.size}px`,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.4, 0], // Fade in then out
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          {item.value}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBinary;
