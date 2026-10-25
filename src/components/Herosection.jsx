import { Link } from "react-router-dom";
import { MapPin, MessageSquare, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Crisp SVG LinkedIn icon matching editorial weight
const LinkedInIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="none"
    height="16"
    width="16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect height="12" width="4" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Herosection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-24 sm:pt-32 md:pt-[140px] pb-16 sm:pb-24 px-4 sm:px-8 md:px-10 lg:px-12 flex-1 flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column (~58% width) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Minimal Text Eyebrow (No dot, no badge) */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-gray-400 tracking-wider uppercase text-[11px] sm:text-xs font-mono font-medium mb-5 sm:mb-6"
          >
            Available for Opportunities
          </motion.p>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#F2F4F7] tracking-[-0.035em] leading-[1.08] sm:leading-[1.0] mb-5 sm:mb-6"
          >
            Hi, I&apos;m Ahmad
            <br />
            <span className="text-[#23B08A]">Nur&apos;Ain.</span>
          </motion.h1>

          {/* Role & Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mb-5 sm:mb-6 space-y-1.5"
          >
            <p className="text-[17px] sm:text-[19px] font-semibold text-[#E6E8EB] tracking-tight">
              Backend &amp; Full-Stack Developer
            </p>
            <p className="text-[13px] sm:text-[14px] text-gray-400 flex items-center gap-2">
              <MapPin className="text-[#23B08A] w-[14px] sm:w-[15px] h-[14px] sm:h-[15px] shrink-0" strokeWidth={1.75} />
              <span>Indramayu, West Java, Indonesia</span>
            </p>
          </motion.div>

          {/* Hero Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-[#9ea6b0] max-w-[620px] text-sm sm:text-[16px] leading-relaxed font-normal mb-8 sm:mb-10"
          >
            Informatics graduate from Universitas Majalengka (GPA 3.92/4.00) focused on building database-driven applications and robust API architectures. Experienced in PHP, Laravel, MySQL, PostgreSQL, JavaScript, React.js, Livewire, Filament, and Tailwind CSS.
          </motion.p>

          {/* Primary Action Buttons (Disciplined rounded-xl, tactile micro-interactions) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            {/* Primary Action: Solid Mint CTA */}
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#23B08A] text-[#0b0e10] font-semibold text-sm hover:bg-[#209f7c] transition-all shadow-md shadow-[#23B08A]/15 active:scale-[0.98] gap-2 min-h-[44px]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-5 rounded-xl border border-white/[0.1] bg-[#14171a] text-gray-200 font-medium text-sm hover:border-[#23B08A]/50 hover:bg-[#1a1e22] hover:text-white transition-all active:scale-[0.98] gap-2 min-h-[44px]"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
            </a>

            {/* Tertiary Action: Contact */}
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-5 rounded-xl border border-white/[0.08] bg-transparent text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/[0.04] transition-all text-sm font-medium active:scale-[0.98] gap-2 min-h-[44px]"
            >
              <MessageSquare className="text-gray-400 w-4 h-4" strokeWidth={1.75} />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column Profile Card (~42% width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative w-full mt-4 lg:mt-0"
        >
          {/* High-Craft Profile Card */}
          <div className="w-full max-w-[400px] rounded-2xl border border-white/[0.08] bg-[#111316] p-5 shadow-2xl shadow-black/70 hover:border-white/[0.14] transition-colors">
            {/* Card Portrait */}
            <div className="w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden bg-[#0d0f11] mb-5 border border-white/[0.06] relative group">
              <img
                alt="Ahmad Nur'Ain"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                src="/IMG_5sw456.JPG"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/erasebg-transformed.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-gray-300">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  Indramayu, ID
                </span>
                <span className="bg-[#23B08A]/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#23B08A]/30 text-[#23B08A] font-semibold">
                  GPA 3.92
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#F2F4F7] tracking-tight">
                  Ahmad Nur&apos;Ain
                </h3>
                <p className="text-[13px] text-[#23B08A] font-medium mt-0.5">
                  Backend &amp; Full-Stack Developer
                </p>
              </div>

              {/* Core Engineering Stack (Clean chips, not rounded-full pills) */}
              <div className="space-y-2 pt-1 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold block">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["PHP / Laravel", "MySQL", "PostgreSQL", "React.js", "Tailwind CSS", "REST API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-gray-300 text-[11px] font-mono hover:border-[#23B08A]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
