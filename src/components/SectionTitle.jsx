import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 w-full">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green/20 to-brand-blue/60 tracking-tighter mb-2">
          {title}
        </h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-3">
        <span className="text-brand-green font-mono text-xs tracking-[0.2em] uppercase font-bold">{subtitle}</span>
        <div className="h-[2px] w-12 bg-white/20"></div>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
