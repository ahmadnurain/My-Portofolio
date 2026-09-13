import { Link } from "react-router-dom";
import { Download, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & UI",
    items: ["Laravel", "React.js", "Livewire", "Tailwind CSS", "Filament", "Vue.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Security",
    items: ["Git", "GitHub", "Postman", "VS Code", "Burp Suite", "Web Security Testing"],
  },
];

const experiencePreview = [
  {
    role: "Informatics Program Accreditation Team",
    org: "Universitas Majalengka",
    period: "Jul 2024 – Nov 2024",
    detail: "Developed parts of the Study Program website with WordPress and managed official documentation.",
  },
  {
    role: "Practicum Assistant — Disruption & Automation",
    org: "Universitas Majalengka",
    period: "Jun 2024",
    detail: "Assisted students in MicroPython programming practicums, debugging errors, and assignment reviews.",
  },
  {
    role: "Project-Based Virtual Intern — Frontend",
    org: "Core Initiative Studio x Rakamin Academy",
    period: "Sep 2023 – Oct 2023",
    detail: "Developed catalog landing page with HTML, CSS, JS, Vue.js, and integrated REST APIs.",
  },
];

const resumeUrl =
  "https://drive.google.com/file/d/1YR74DQc5j0UB0gzCUXywt-vm-kDKnvIK/view?usp=sharing";

const About = () => {
  return (
    <main className="relative z-10 flex-1 max-w-[1240px] w-full mx-auto px-6 sm:px-8 pt-32 md:pt-40 pb-24 text-left">
      {/* PAGE INTRO HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-6"
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F4F7] tracking-tight">
            About &amp; Career
          </h1>
        </div>
        {/* Right Eyebrow with hairline divider */}
        <div className="flex items-center justify-start md:justify-end gap-3">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#23B08A]">
            MY STORY
          </span>
        </div>
      </motion.section>

      {/* MAIN STORY SECTION (Two-column editorial composition) */}
      <section className="pt-14 md:pt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Editorial Column (~62% -> 7 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-start"
        >
          {/* Large Editorial Statement */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] md:leading-[1.15] font-extrabold text-[#F2F4F7] tracking-tight mb-8">
            <span className="text-[#23B08A]">Crafting</span> reliable backend systems{" "}
            <span className="font-serif italic font-light text-slate-300">
              &amp; useful web experiences.
            </span>
          </h2>

          {/* Narrative Paragraphs from CONTENT.md */}
          <div className="space-y-6 text-[#A2A9B3] text-base sm:text-[17px] leading-relaxed max-w-[680px]">
            <p>
              I am an Informatics graduate from Universitas Majalengka with a strong interest in
              backend and full-stack development. I have worked with Laravel, React.js, MySQL,
              PostgreSQL, REST APIs, Tailwind CSS, Livewire, and Filament across academic,
              competition, internship, and project-based work.
            </p>
            <p>
              My experience includes building database-driven web applications, integrating APIs and
              external services, developing backend features, debugging, and collaborating in team
              projects. I am especially interested in growing as a backend-focused full-stack
              developer.
            </p>
          </div>

          {/* Primary & Secondary CTA Buttons */}
          <div className="pt-10 md:pt-12 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 h-[52px] rounded-full bg-[#23B08A] text-[#04110D] font-semibold text-sm hover:bg-[#1d9c7b] transition-colors shadow-lg shadow-[#23B08A]/15 min-h-[44px]"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/experience"
                className="inline-flex items-center justify-center gap-2 px-7 h-[52px] rounded-full bg-[#111416] border border-white/10 text-gray-200 font-medium text-sm hover:border-[#23B08A]/40 hover:bg-[#17191c] transition-colors min-h-[44px]"
              >
                <Briefcase className="w-5 h-5 text-gray-400" />
                <span>View Experience</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 h-[52px] rounded-full border border-white/[0.08] bg-transparent text-gray-300 hover:text-white hover:border-gray-500 transition-colors text-sm font-medium min-h-[44px]"
              >
                <span>View Projects</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card (~38% -> 5 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-[380px]">
            {/* Subtle Radial Teal Aura Behind Portrait */}
            <div className="absolute -inset-4 bg-[#23B08A]/10 rounded-[32px] filter blur-3xl pointer-events-none opacity-60"></div>
            {/* Clean Portrait Container */}
            <div className="relative rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#101214] shadow-2xl group">
              <img
                alt="Ahmad Nur'Ain"
                className="w-full h-[420px] sm:h-[460px] object-cover object-center grayscale-[10%] contrast-[1.04] group-hover:grayscale-0 transition-all duration-500 ease-out"
                src="/IMG_5sw456.JPG"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/erasebg-transformed.webp";
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* QUICK FACTS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-20 md:mt-28 pt-12 md:pt-16 border-t border-white/[0.06]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Education */}
          <div className="flex flex-col space-y-2.5 border-l border-white/10 pl-6 md:pl-8 text-left">
            <span className="text-xs font-mono text-[#23B08A] uppercase tracking-wider font-semibold">
              EDUCATION
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight pt-1">
              S1 Informatika — Universitas Majalengka
            </h3>
            <p className="text-sm font-semibold text-[#23B08A]">GPA: 3.92 / 4.00</p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Comprehensive coursework rooted in algorithms, databases, data structures, and
              practical software engineering methodologies.
            </p>
          </div>

          {/* Focus */}
          <div className="flex flex-col space-y-2.5 border-l border-white/10 pl-6 md:pl-8 text-left">
            <span className="text-xs font-mono text-[#23B08A] uppercase tracking-wider font-semibold">
              FOCUS
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight pt-1">
              Backend &amp; Full-Stack Development
            </h3>
            <p className="text-sm font-semibold text-[#23B08A]">
              APIs, System Architecture &amp; Databases
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Dedicated to architecting resilient backend services, reliable RESTful API layers,
              optimized database schemas, and clean frontend integrations.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col space-y-2.5 border-l border-white/10 pl-6 md:pl-8 text-left">
            <span className="text-xs font-mono text-[#23B08A] uppercase tracking-wider font-semibold">
              LOCATION
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight pt-1">
              West Java, Indonesia
            </h3>
            <p className="text-sm font-semibold text-[#23B08A]">
              Indramayu / West Java
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Open to full-time engineering roles, remote team arrangements, and selected freelance
              collaborations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TECHNICAL SKILLS SECTION (Only CONTENT.md skills) */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/[0.06]"
      >
        <div className="mb-10">
          <span className="text-xs font-mono text-[#23B08A] uppercase tracking-wider font-semibold block mb-2">
            TOOLSET &amp; CAPABILITIES
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Demonstrated Technical Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-[#111416] border border-white/[0.06] hover:border-white/15 transition-colors"
            >
              <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-4 pb-2 border-b border-white/[0.06]">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE PREVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/[0.06]"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono text-[#23B08A] uppercase tracking-wider font-semibold block mb-2">
              BACKGROUND &amp; ROLES
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Experience Preview
            </h3>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#23B08A] hover:underline"
          >
            <span>View Full Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiencePreview.map((exp) => (
            <div
              key={exp.role}
              className="p-6 rounded-2xl bg-[#111416] border border-white/[0.06] hover:border-[#23B08A]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-gray-400 block mb-2">{exp.period}</span>
                <h4 className="text-base font-bold text-[#F2F4F7] mb-1">{exp.role}</h4>
                <p className="text-xs text-[#23B08A] font-medium mb-3">{exp.org}</p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default About;
