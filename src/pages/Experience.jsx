import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Download,
  ArrowRight,
  Terminal,
  Database,
  Shield,
  Briefcase,
  Layers,
} from "lucide-react";
import {
  experienceTimeline,
  projectExperience,
  educationData,
  skillsGroupData,
  awardsData,
} from "../data/experience";

const resumeUrl =
  "https://drive.google.com/file/d/1Umr-i8VQbLUF4gqKKZcGrVMKxn0sDYtx/view?usp=sharing";

const skillIcons = {
  terminal: <Terminal className="w-5 h-5 text-[#23B08A]" />,
  database: <Database className="w-5 h-5 text-[#23B08A]" />,
  shield: <Shield className="w-5 h-5 text-[#23B08A]" />,
};

const Experience = () => {
  return (
    <main className="relative z-10 flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 md:px-12 pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-24 text-left">
      {/* 1. PAGE HEADER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mb-12 sm:mb-16 md:mb-24"
      >
        {/* Eyebrow */}
        <div className="mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#23B08A] font-semibold">
            EXPERIENCE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-50 tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6">
          Learning, building, <br />
          and <span className="text-[#23B08A] font-extrabold">contributing.</span>
        </h1>

        {/* Supporting Context */}
        <p className="text-[#A2A9B3] text-sm sm:text-lg leading-relaxed max-w-[650px]">
          A timeline of project-based work, academic involvement, and practical development
          experience that has shaped how I approach software.
        </p>
      </motion.section>

      {/* 2. EDITORIAL VERTICAL TIMELINE */}
      <section className="mb-14 sm:mb-20 md:mb-28 max-w-[960px] mx-auto" id="timeline">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Briefcase className="w-4 h-4 text-[#23B08A]" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-50 tracking-tight">
            Experience Timeline
          </h2>
        </div>

        <div className="space-y-0">
          {experienceTimeline.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 group"
            >
              {/* Left Column: Period & Type */}
              <div className="md:col-span-1 pt-1 md:text-right">
                <time className="font-mono text-[11px] sm:text-xs text-gray-300 tracking-tight block">
                  {item.period}
                </time>
                <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block mt-0.5 sm:mt-1">
                  {item.type}
                </span>
              </div>

              {/* Right Column: Node Line & Content Card */}
              <div
                className={`md:col-span-3 border-l border-white/[0.08] pl-4 sm:pl-8 md:pl-10 pb-8 sm:pb-12 relative ${
                  index === experienceTimeline.length - 1 ? "border-transparent pb-4" : ""
                }`}
              >
                {/* Node Marker */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#17191c] border border-white/20 group-hover:border-[#23B08A] group-hover:bg-[#23B08A] transition-all duration-300" />

                {/* Content Card */}
                <div className="bg-[#101214]/80 border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 hover:border-[#23B08A]/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5 sm:gap-2 mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-50 group-hover:text-[#23B08A] transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#23B08A] font-medium">
                      {item.organization}
                    </span>
                  </div>

                  <p className="text-[#A2A9B3] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                    {item.description}
                  </p>

                  {/* Skill / Activity Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 3. PROJECT-BASED CONTRIBUTIONS SECTION */}
      <section className="mb-20 md:mb-28 max-w-[960px] mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#23B08A]" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-50 tracking-tight">
              Project Experience &amp; Contributions
            </h2>
          </div>
          <p className="text-[#A2A9B3] text-sm leading-relaxed">
            Key team and competition projects highlighting backend responsibilities, architecture,
            and verified outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectExperience.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-[#101214]/80 border border-white/[0.08] rounded-2xl p-6 md:p-7 hover:border-[#23B08A]/30 transition-all duration-200 shadow-xl shadow-black/40 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#23B08A] font-semibold">
                    {proj.context}
                  </span>
                  {proj.achievement && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#23B08A] bg-[#23B08A]/10 border border-[#23B08A]/20 px-2 py-0.5 rounded-full">
                      <Trophy className="w-3 h-3" />
                      <span>Winner</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-50 mb-1 group-hover:text-[#23B08A] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-gray-400 font-mono mb-3">
                  <span className="text-[#23B08A]">Role:</span> {proj.role}
                </p>

                <p className="text-[#A2A9B3] text-sm leading-relaxed mb-5">
                  {proj.contribution}
                </p>
              </div>

              <div>
                {proj.achievement && (
                  <div className="mb-4 pb-3 border-b border-white/[0.06] text-xs font-mono text-gray-300 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[#23B08A]" />
                    <span>{proj.achievement}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATION SECTION */}
      <section className="mb-20 md:mb-28 max-w-[960px] mx-auto">
        <div className="mb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#23B08A] font-semibold block">
            EDUCATION
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#101214]/90 border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-9 hover:border-white/20 transition-colors shadow-xl shadow-black/40"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-white/[0.06]">
            <div className="space-y-1 sm:space-y-1.5">
              <div className="inline-flex items-center gap-2 mb-0.5 sm:mb-1">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#23B08A]" />
                <span className="text-[11px] sm:text-xs font-mono text-gray-400">Undergraduate Degree</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-50 tracking-tight">
                {educationData.degree}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">{educationData.institution}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-gray-300">
                {educationData.period}
              </div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#23B08A]/10 border border-[#23B08A]/30 font-mono text-xs text-[#23B08A] font-semibold">
                GPA: {educationData.gpa}
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-4 sm:pt-6">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2 sm:mb-3">
              Relevant Academic Coursework
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {educationData.courses.map((course) => (
                <span
                  key={course}
                  className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. SKILLS SECTION ("Tools I work with") */}
      <section className="mb-14 sm:mb-20 md:mb-28 max-w-[960px] mx-auto" id="skills">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-50 mb-1.5 sm:mb-2">Tools I work with</h2>
          <p className="text-[#A2A9B3] text-xs sm:text-sm leading-relaxed">
            Technologies, frameworks, and environments I use across development and academic
            projects.
          </p>
        </div>

        {/* 3 Clean Minimal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {skillsGroupData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#101214]/80 border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col justify-between hover:border-[#23B08A]/30 transition-colors shadow-xl shadow-black/40"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                  {skillIcons[group.icon] || <Terminal className="w-5 h-5 text-[#23B08A]" />}
                  <h3 className="text-base font-bold text-gray-50">{group.category}</h3>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 text-xs font-mono text-gray-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#23B08A]/60 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-gray-500">
                {group.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED HONORS & AWARDS */}
      <section className="mb-14 sm:mb-20 md:mb-28 max-w-[960px] mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <Trophy className="w-4 h-4 text-[#23B08A]" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-50 tracking-tight">
              Verified Honors &amp; Awards
            </h2>
          </div>
          <p className="text-[#A2A9B3] text-xs sm:text-sm leading-relaxed">
            Competition results and academic recognitions achieved during collegiate studies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {awardsData.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#101214]/80 border border-white/[0.08] rounded-xl p-3.5 sm:p-5 flex items-start gap-3 sm:gap-3.5 hover:border-[#23B08A]/30 transition-all shadow-md shadow-black/30"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#23B08A]/10 border border-[#23B08A]/20 flex items-center justify-center text-[#23B08A] shrink-0 mt-0.5">
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-gray-50 tracking-tight mb-0.5 sm:mb-1">
                  {award.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400">
                  <span className="truncate">{award.event}</span>
                  <span className="text-[#23B08A] ml-2 shrink-0">{award.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. CLOSING CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[960px] mx-auto rounded-2xl sm:rounded-3xl bg-[#101214]/90 border border-white/[0.08] p-5 sm:p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Soft ambient highlight */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#23B08A]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-50 tracking-tight">
            Want the concise version?
          </h2>
          <p className="text-[#A2A9B3] text-xs sm:text-sm md:text-base leading-relaxed">
            Download my resume for a compact overview of my experience, projects, skills, and
            education.
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary CTA Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#23B08A] text-[#04110D] font-semibold text-xs sm:text-sm hover:bg-[#1d9c7b] transition-all duration-200 shadow-lg shadow-[#23B08A]/10 min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Secondary CTA Button */}
            <Link
              to="/projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/[0.03] border border-white/[0.1] text-gray-300 hover:text-white hover:border-[#23B08A]/40 transition-all duration-200 text-xs sm:text-sm font-medium min-h-[44px]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Experience;
