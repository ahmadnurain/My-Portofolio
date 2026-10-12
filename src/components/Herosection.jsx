import { Link } from "react-router-dom";
import { MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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

const techStack = ["Laravel", "React.js", "MySQL", "PostgreSQL", "REST API"];

const Herosection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-[140px] md:pt-[160px] pb-16 px-6 md:px-10 lg:px-12 flex-1 flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (~58-60% width) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Animation */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-400 tracking-wider uppercase text-xs font-medium font-mono mb-6 inline-flex items-center gap-2"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          {/* Hero Headline Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold text-[#F2F4F7] tracking-[-0.035em] leading-[0.98] mb-6"
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
            className="mb-6 space-y-1.5"
          >
            <p className="text-[18px] font-semibold text-[#E6E8EB]">
              Backend &amp; Full-Stack Developer
            </p>
            <p className="text-[14px] text-gray-400 flex items-center gap-2">
              <MapPin className="text-[#23B08A] w-[15px] h-[15px] shrink-0" strokeWidth={1.75} />
              <span>Indramayu / West Java, Indonesia</span>
            </p>
          </motion.div>

          {/* Hero Description Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[#A2A9B3] max-w-[620px] text-[16px] md:text-[17px] leading-[1.65] font-normal mb-9"
          >
            Informatics graduate from Universitas Majalengka with hands-on experience building web applications using PHP, Laravel, MySQL, PostgreSQL, JavaScript, React.js, Livewire, Tailwind CSS, Filament, and REST APIs. Focused on backend and full-stack development, with experience in API integration, database-driven applications, debugging, and team projects.
          </motion.p>

          {/* Primary Action Buttons with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center min-w-[150px] h-[52px] px-6 rounded-full bg-[#23B08A] text-[#04110D] font-semibold text-sm hover:bg-[#1d9c7b] transition-colors shadow-lg shadow-[#23B08A]/15 min-h-[44px]"
              >
                <span>View Projects</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full border border-white/[0.08] bg-[#17191c] text-gray-200 font-medium text-sm hover:border-[#23B08A]/50 hover:bg-[#1f2226] transition-colors gap-2 min-h-[44px]"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full border border-white/[0.08] bg-transparent text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/[0.03] transition-colors text-sm font-medium gap-2 min-h-[44px]"
              >
                <MessageSquare className="text-gray-400 w-[17px] h-[17px]" strokeWidth={1.75} />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column (~38-40% width) Profile Card with Motion & Interactive Tilt */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full">
          {/* Static Ambient Glow without continuous GPU repaint loop */}
          <div className="absolute -inset-6 bg-[#23B08A]/[0.05] rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Card Container with Entrance and Floating Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group w-full max-w-[420px] rounded-[26px] bg-[#111416] border border-white/[0.08] p-5 relative shadow-2xl shadow-black/80 hover:border-white/20 transition-colors"
          >
            {/* Card Image with subtle zoom on hover */}
            <div className="w-full h-[320px] sm:h-[340px] rounded-[18px] overflow-hidden bg-[#17191c] mb-5 border border-white/[0.06] relative">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#111416]/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>

            {/* Profile Card Fields */}
            <div className="space-y-3.5 text-left">
              <div>
                <h3 className="text-[21px] font-bold text-[#F2F4F7] tracking-tight group-hover:text-white transition-colors">
                  Ahmad Nur&apos;Ain
                </h3>
                <p className="text-[13px] text-[#23B08A] font-medium mt-0.5">
                  Backend &amp; Full-Stack Developer
                </p>
              </div>

              {/* Tech Stack Badges with Interactive Motion */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                    whileHover={{
                      scale: 1.08,
                      borderColor: "rgba(35, 176, 138, 0.4)",
                      backgroundColor: "rgba(35, 176, 138, 0.08)",
                    }}
                    className="h-7 px-3 inline-flex items-center rounded-lg bg-white/[0.035] border border-white/[0.06] text-gray-300 text-[11px] font-mono cursor-default transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Availability */}
              <div className="pt-3.5 border-t border-white/[0.06]">
                <p className="text-[12px] text-gray-400 leading-snug">
                  Open to full-time opportunities and selected freelance projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
