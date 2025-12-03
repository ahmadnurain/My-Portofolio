import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-cyan-500/50"></span>
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">{subtitle}</span>
          <span className="h-[1px] w-8 bg-cyan-500/50"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white relative">
          <span className="absolute -inset-1 blur-xl bg-cyan-500/20 rounded-full"></span>
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">{title}</span>
        </h2>
        {/* Decorative corner brackets */}
        <div className="absolute -top-4 -left-6 w-4 h-4 border-t-2 border-l-2 border-cyan-500/30"></div>
        <div className="absolute -bottom-4 -right-6 w-4 h-4 border-b-2 border-r-2 border-cyan-500/30"></div>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
