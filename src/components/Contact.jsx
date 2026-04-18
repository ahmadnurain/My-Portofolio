import { motion } from "framer-motion";
import { MdEmail, MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none -z-0" />
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] p-12 md:p-20 shadow-[-10px_0_40px_rgba(5,150,105,0.05),10px_0_40px_rgba(0,100,250,0.05)]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8 tracking-widest uppercase">
            What's Next?
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue italic font-light">extraordinary?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
            I am currently open to new full-time roles or freelance opportunities. My inbox is always open whether you have a project or just want to connect.
          </p>
          <a
            href="mailto:ahmadnurain82@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(5,150,105,0.4)] text-sm md:text-base hover:scale-[1.02]"
          >
            <MdEmail size={22} className="text-gray-900 group-hover:text-white transition-colors" /> 
            Let's Talk 
            <MdArrowOutward size={20} className="text-gray-900 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
