import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ArrowUpRight, Mail, FileText, Terminal, Globe, Info } from "lucide-react";
import PropTypes from "prop-types";
import { projectsData } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

GithubIcon.propTypes = {
  className: PropTypes.string,
};

const filterCategories = [
  "All",
  "Client & Institutional",
  "Backend",
  "Web Development",
  "Competition / Team",
  "Academic",
  "Personal",
];

const resumeUrl =
  "https://drive.google.com/file/d/1YR74DQc5j0UB0gzCUXywt-vm-kDKnvIK/view?usp=sharing";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.includes(activeFilter);
  });

  const featuredProject = filteredProjects.find((p) => p.featured);
  const standardProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <main className="relative z-10 flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-8 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 text-left">
      {/* PAGE INTRO HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/[0.06] pb-4 sm:pb-6"
      >
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F4F7] tracking-tight leading-[1.15]">
            Projects I&apos;ve Built <br className="hidden sm:inline" />
            <span className="text-[#23B08A]">&amp; Contributed To.</span>
          </h1>
        </div>
        {/* Right Eyebrow with hairline divider */}
        <div className="flex items-center justify-start md:justify-end gap-3">
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#23B08A]">
            PROJECTS
          </span>
        </div>
      </motion.section>

      {/* SUPPORTING TEXT & FILTER ROW */}
      <section className="pt-6 sm:pt-8 pb-8 sm:pb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
        <p className="text-[#A2A9B3] text-sm sm:text-[17px] leading-relaxed max-w-[620px]">
          A selection of institutional, client, competition, and academic projects that reflect my
          experience in backend engineering, full-stack web applications, API integrations, and database architecture.
        </p>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {filterCategories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#23B08A]/15 text-[#23B08A] border border-[#23B08A]/50 shadow-sm shadow-[#23B08A]/10"
                    : "bg-white/[0.03] text-gray-400 border border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED PROJECT CARD */}
      <AnimatePresence mode="wait">
        {featuredProject && (
          <motion.section
            key={featuredProject.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 sm:mb-14"
          >
            <div className="relative rounded-2xl sm:rounded-[28px] border border-white/[0.08] bg-[#101214]/90 backdrop-blur-md overflow-hidden p-4 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 hover:border-[#23B08A]/30 transition-all duration-300 group">
              {/* Subtle background ambient aura */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#23B08A]/[0.06] rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left Column: Visual Representation */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {featuredProject.image ? (
                    <div
                      onClick={() => setSelectedProject(featuredProject)}
                      className="w-full h-48 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090b0d] shadow-lg cursor-pointer group/img"
                    >
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover/img:scale-103 transition-all duration-500"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setSelectedProject(featuredProject)}
                      className="w-full rounded-2xl bg-[#090b0d] border border-white/[0.08] p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer"
                    >
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-[#23B08A]" />
                          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                            Backend Architecture
                          </span>
                        </div>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-[#23B08A]/10 text-[#23B08A] border border-[#23B08A]/30">
                          PERMIKOMNAS 2025
                        </span>
                      </div>

                      {/* Architecture Workflow Blocks */}
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-gray-400">Frontend Layer</span>
                          <span className="text-[#23B08A]">React + Inertia.js</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#23B08A]/[0.06] border border-[#23B08A]/20">
                          <span className="text-white font-medium">Backend (My Role)</span>
                          <span className="text-[#23B08A] text-[11px]">Laravel + Mail + DB</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-gray-400">ML Classification</span>
                          <span className="text-gray-300">Flask + TensorFlow</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-500">
                        <span>Service Status: Verified</span>
                        <span className="text-[#23B08A]">1st Place Winner</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Project Information */}
                <div className="lg:col-span-7 flex flex-col justify-start text-left">
                  {/* Context & Featured Badge */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#23B08A] font-semibold">
                      {featuredProject.context}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-gray-300">
                      Featured Project
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    onClick={() => setSelectedProject(featuredProject)}
                    className="text-2xl sm:text-3xl font-bold text-[#F2F4F7] tracking-tight mb-4 group-hover:text-[#23B08A] transition-colors duration-200 cursor-pointer"
                  >
                    {featuredProject.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#A2A9B3] text-sm sm:text-base leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Metadata Row: Role & Achievement */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-white/[0.06] mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                        My Role
                      </span>
                      <span className="text-sm font-semibold text-[#F2F4F7]">
                        {featuredProject.role}
                      </span>
                    </div>
                    {featuredProject.achievement && (
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#23B08A] block mb-1">
                          Achievement
                        </span>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#F2F4F7]">
                          <Trophy className="w-4 h-4 text-[#23B08A] shrink-0" />
                          <span>{featuredProject.achievement}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-start gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#23B08A]/15 border border-[#23B08A]/40 text-xs font-mono text-[#23B08A] hover:bg-[#23B08A]/25 transition-all min-h-[44px] cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Case Study &amp; Details</span>
                    </button>

                    {featuredProject.repository && (
                      <a
                        href={featuredProject.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-300 hover:text-white hover:border-[#23B08A]/40 hover:bg-white/[0.08] transition-all min-h-[44px]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#23B08A]" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#23B08A]/10 border border-[#23B08A]/30 text-xs font-mono text-[#23B08A] hover:bg-[#23B08A]/20 transition-all min-h-[44px]"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {!featuredProject.repository && !featuredProject.liveUrl && (
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-gray-400">
                        {featuredProject.context?.includes("Institutional")
                          ? "Institutional Deployment"
                          : "Collaborative Prototype"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* STANDARD PROJECTS GRID */}
      <section className="mb-14 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-stretch">
          <AnimatePresence>
            {standardProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col justify-between rounded-xl sm:rounded-[24px] border border-white/[0.08] bg-[#101214]/90 backdrop-blur-md p-4 sm:p-6 md:p-8 hover:border-[#23B08A]/40 hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-black/40 group"
              >
                <div>
                  {/* Optional Real Screenshot Preview */}
                  {project.image && (
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="w-full h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 border border-white/[0.06] bg-[#090b0d] cursor-pointer group/cardimg"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top grayscale-[15%] group-hover/cardimg:grayscale-0 group-hover/cardimg:scale-103 transition-all duration-500"
                      />
                    </div>
                  )}

                  {/* 1. Context */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#23B08A] font-semibold truncate">
                      {project.context}
                    </span>
                    {project.achievement && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-[#23B08A] bg-[#23B08A]/10 border border-[#23B08A]/20 px-2 py-0.5 rounded-full truncate">
                        <Trophy className="w-3 h-3 shrink-0" />
                        <span className="truncate">Award Winner</span>
                      </span>
                    )}
                  </div>

                  {/* 2. Project Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-[#F2F4F7] tracking-tight mb-2 sm:mb-3 group-hover:text-[#23B08A] transition-colors duration-200 cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* 3. Short Description */}
                  <p className="text-[#A2A9B3] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </p>

                  {/* 4. My Role & 5. Achievement */}
                  <div className="space-y-2.5 py-3 border-y border-white/[0.06] mb-4 sm:mb-5">
                    {project.role && (
                      <div className="flex items-center justify-between text-[11px] sm:text-xs">
                        <span className="font-mono uppercase text-gray-400 tracking-wider">
                          My Role
                        </span>
                        <span className="font-medium text-[#F2F4F7]">{project.role}</span>
                      </div>
                    )}
                    {project.achievement && (
                      <div className="flex items-center justify-between text-[11px] sm:text-xs">
                        <span className="font-mono uppercase text-[#23B08A] tracking-wider">
                          Achievement
                        </span>
                        <span className="font-medium text-[#F2F4F7] text-right truncate pl-2">
                          {project.achievement}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 6. Technology Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 7. Actions Bar with Details Modal Trigger */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-gray-300 hover:text-white hover:border-[#23B08A]/50 hover:bg-[#23B08A]/10 transition-all min-h-[36px] sm:min-h-[40px] cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#23B08A]" />
                    <span>Details</span>
                  </button>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {!project.repository && !project.liveUrl && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-gray-400">
                        {project.context?.includes("Institutional")
                          ? "Deployment"
                          : "Collaborative"}
                      </span>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#23B08A]/10 border border-[#23B08A]/30 text-xs font-mono text-[#23B08A] hover:bg-[#23B08A]/20 transition-all min-h-[36px] sm:min-h-[40px]"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-300 hover:text-white hover:border-[#23B08A]/40 hover:bg-white/[0.08] transition-all min-h-[36px] sm:min-h-[40px]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#23B08A]" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3 h-3 text-gray-400" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="mt-14 sm:mt-16 md:mt-24 pt-10 sm:pt-12 md:pt-16 border-t border-white/[0.06]">
        <div className="rounded-2xl sm:rounded-[28px] border border-white/[0.08] bg-[#101214]/80 backdrop-blur-md p-5 sm:p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#23B08A]/[0.05] rounded-full blur-3xl pointer-events-none" />

          <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#23B08A] font-semibold mb-2 sm:mb-3 block">
            COLLABORATION
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#F2F4F7] tracking-tight mb-3 sm:mb-4">
            Interested in working together?
          </h2>

          <p className="text-[#A2A9B3] text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
            I&apos;m open to full-time opportunities, collaborations, and selected freelance projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-full bg-[#23B08A] text-[#04110D] font-semibold text-xs sm:text-sm hover:bg-[#1d9c7b] transition-all duration-200 active:scale-95 shadow-lg shadow-[#23B08A]/10"
            >
              <Mail className="w-4 h-4" />
              <span>Start a Conversation</span>
            </Link>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-full bg-[#17191c] border border-white/[0.1] text-gray-200 font-medium text-xs sm:text-sm hover:border-[#23B08A]/50 hover:text-white transition-all duration-200 active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#23B08A]" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>
      </section>
      {/* PROJECT DETAILS MODAL DIALOG */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Projects;
