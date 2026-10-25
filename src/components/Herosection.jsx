import { Link } from "react-router-dom";
import { MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ShimmerButton from "./ui/ShimmerButton";
import SpotlightCard from "./ui/SpotlightCard";
import Marquee from "./ui/Marquee";

// Lucide-style LinkedIn SVG matching Stitch reference
const LinkedInIcon = () => (
  <svg
    className="w-[17px] h-[17px]"
    fill="none"
    height="17"
    width="17"
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

const marqueeSkills = [
  "Laravel",
  "React.js",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "PHP",
  "Livewire",
  "Filament",
  "Tailwind CSS",
  "Vue.js",
  "Git & GitHub",
];

const Herosection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-24 sm:pt-32 md:pt-[150px] pb-12 sm:pb-16 px-4 sm:px-8 md:px-10 lg:px-12 flex-1 flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column (~58-60% width) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Animation */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-400 tracking-wider uppercase text-[11px] sm:text-xs font-medium font-mono mb-4 sm:mb-6 inline-flex items-center gap-2"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          {/* Hero Headline Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-extrabold text-[#F2F4F7] tracking-[-0.035em] leading-[1.05] sm:leading-[0.98] mb-5 sm:mb-6"
          >
            Hi, I&apos;m Ahmad
            <br />
            <span className="text-[#26C6A3]">Nur&apos;Ain.</span>
          </motion.h1>

          {/* Role & Location Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-5 sm:mb-6 space-y-1.5"
          >
            <p className="text-[16px] sm:text-[18px] font-semibold text-[#E6E8EB]">
              Backend &amp; Full-Stack Developer
            </p>
            <p className="text-[13px] sm:text-[14px] text-gray-400 flex items-center gap-2">
              <MapPin className="text-[#23B08A] w-[14px] sm:w-[15px] h-[14px] sm:h-[15px] shrink-0" strokeWidth={1.75} />
              <span>Indramayu / West Java, Indonesia</span>
            </p>
          </motion.div>

          {/* Hero Description Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[#A2A9B3] max-w-[620px] text-sm sm:text-[16px] md:text-[17px] leading-relaxed font-normal mb-7 sm:mb-9"
          >
            Informatics graduate from Universitas Majalengka with hands-on experience building web applications using PHP, Laravel, MySQL, PostgreSQL, JavaScript, React.js, Livewire, Tailwind CSS, Filament, and REST APIs. Focused on backend and full-stack development, with experience in API integration, database-driven applications, debugging, and team projects.
          </motion.p>

          {/* Primary Action Buttons with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto"
          >
            {/* Magic UI Shimmer Button */}
            <div className="flex-1 sm:flex-initial">
              <ShimmerButton
                to="/projects"
                className="w-full sm:w-auto min-w-[150px] shadow-lg shadow-[#23B08A]/10"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </ShimmerButton>
            </div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="flex-1 sm:flex-initial">
              <a
                href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[46px] sm:h-[52px] px-5 sm:px-6 rounded-full border border-white/[0.08] bg-[#17191c] text-gray-200 font-medium text-xs sm:text-sm hover:border-[#23B08A]/50 hover:bg-[#1f2226] transition-colors gap-2 min-h-[44px]"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[46px] sm:h-[52px] px-5 sm:px-6 rounded-full border border-white/[0.08] bg-transparent text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/[0.03] transition-colors text-xs sm:text-sm font-medium gap-2 min-h-[44px]"
              >
                <MessageSquare className="text-gray-400 w-[15px] sm:w-[17px] h-[15px] sm:h-[17px]" strokeWidth={1.75} />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column Profile Card with React Bits SpotlightCard */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full mt-4 lg:mt-0">
          {/* Static Ambient Glow */}
          <div className="absolute -inset-6 bg-[#23B08A]/[0.05] rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Interactive Spotlight Card */}
          <SpotlightCard className="w-full max-w-[420px] rounded-2xl sm:rounded-[26px] p-4 sm:p-5 shadow-2xl shadow-black/80">
            {/* Card Image with subtle zoom on hover */}
            <div className="w-full h-[260px] sm:h-[340px] rounded-xl sm:rounded-[18px] overflow-hidden bg-[#17191c] mb-4 sm:mb-5 border border-white/[0.06] relative group">
              <img
                alt="Ahmad Nur'Ain"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                src="/IMG_5sw456.JPG"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/erasebg-transformed.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111416]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Profile Card Fields */}
            <div className="space-y-3.5 text-left">
              <div>
                <h3 className="text-[21px] font-bold text-[#F2F4F7] tracking-tight">
                  Ahmad Nur&apos;Ain
                </h3>
                <p className="text-[13px] text-[#23B08A] font-medium mt-0.5">
                  Backend &amp; Full-Stack Developer
                </p>
              </div>

              {/* Verified Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {["Laravel", "React.js", "MySQL", "PostgreSQL", "REST API"].map((tech) => (
                  <span
                    key={tech}
                    className="h-7 px-3 inline-flex items-center rounded-lg bg-white/[0.035] border border-white/[0.08] text-gray-300 text-[11px] font-mono hover:border-[#23B08A]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Availability */}
              <div className="pt-3 border-t border-white/[0.06]">
                <p className="text-[12px] text-gray-400 leading-snug">
                  Open to full-time opportunities and selected freelance projects
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Infinite Tech Marquee Row - Powered by Magic UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-14 sm:mt-18 pt-6 border-t border-white/[0.06] w-full"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 px-1">
          <span className="text-[11px] uppercase font-mono tracking-widest text-[#23B08A] font-semibold">
            ENGINEERING STACK &amp; FRAMEWORKS
          </span>
          <span className="text-[11px] font-mono text-gray-500 hidden sm:inline">
            Scroll or hover to inspect
          </span>
        </div>

        <Marquee pauseOnHover className="py-2 [--gap:0.75rem]">
          {marqueeSkills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 rounded-xl bg-[#111416]/90 border border-white/[0.07] hover:border-[#23B08A]/40 hover:bg-[#15191c] transition-all flex items-center gap-2 text-xs font-mono text-gray-300 shrink-0 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#23B08A]" />
              <span>{skill}</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
};

export default Herosection;
