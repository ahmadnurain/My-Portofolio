import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Trophy, Layers, CheckCircle2, Globe, Code2 } from "lucide-react";
import PropTypes from "prop-types";

const GithubIcon = ({ className = "w-4 h-4" }) => (
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

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Handle Escape key, body scroll lock, and hide navbar while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-6 md:p-8">
          {/* Dark Backdrop Overlay without blur so navbar does not get blurred */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 cursor-pointer"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[90vh] bg-[#0c0e11] border border-white/[0.12] rounded-2xl sm:rounded-[28px] shadow-2xl shadow-black/90 overflow-hidden flex flex-col z-10 text-left"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* STICKY HEADER */}
            <div className="sticky top-0 z-20 flex items-center justify-between gap-3 px-4 sm:px-8 py-3.5 sm:py-5 bg-[#0c0e11]/95 backdrop-blur-md border-b border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#23B08A] font-semibold truncate">
                  {project.context}
                </span>
                {project.achievement && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-[#23B08A] bg-[#23B08A]/10 border border-[#23B08A]/25 px-2 sm:px-2.5 py-0.5 rounded-full truncate">
                    <Trophy className="w-3 h-3 shrink-0" />
                    <span className="truncate">{project.achievement}</span>
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-400 hover:text-white hover:bg-white/[0.1] hover:border-white/20 transition-all flex items-center justify-center cursor-pointer shrink-0"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* SCROLLABLE CONTENT BODY */}
            <div className="overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 space-y-5 sm:space-y-8 custom-scrollbar">
              {/* Screenshot Preview */}
              {project.image && (
                <div className="w-full h-44 sm:h-72 md:h-84 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050607] shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Title & Role Info */}
              <div>
                <h2
                  id="modal-title"
                  className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#F2F4F7] tracking-tight mb-2 sm:mb-3"
                >
                  {project.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 py-2.5 sm:py-3 border-y border-white/[0.06] font-mono text-[11px] sm:text-xs text-gray-400">
                  <div>
                    <span className="uppercase text-gray-500 mr-1.5 sm:mr-2">ROLE:</span>
                    <span className="text-[#F2F4F7] font-medium">{project.role}</span>
                  </div>
                  {project.category && (
                    <div>
                      <span className="uppercase text-gray-500 mr-1.5 sm:mr-2">DOMAIN:</span>
                      <span className="text-[#23B08A] font-medium">{project.category}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* In-depth Overview */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#23B08A] mb-2 sm:mb-3 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>PROJECT OVERVIEW</span>
                </h3>
                <p className="text-[#A2A9B3] text-xs sm:text-base leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Contributions & Technical Highlights */}
              {project.contributions && project.contributions.length > 0 && (
                <div>
                  <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#23B08A] mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>KEY CONTRIBUTIONS &amp; ARCHITECTURAL HIGHLIGHTS</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                    {project.contributions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#23B08A]/30 transition-all text-xs sm:text-sm leading-relaxed"
                      >
                        {typeof item === "string" ? (
                          <div className="flex items-start gap-2.5">
                            <span className="text-[#23B08A] font-mono font-bold text-xs shrink-0 select-none">/</span>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ) : (
                          <div>
                            <div className="text-[#F2F4F7] font-semibold mb-1 flex items-center gap-2">
                              <span className="text-[#23B08A] font-mono font-bold text-xs shrink-0 select-none">/</span>
                              <span>{item.title}</span>
                            </div>
                            <p className="text-[#A2A9B3] text-xs sm:text-sm pl-4">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div>
                <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#23B08A] mb-2 sm:mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>TECHNOLOGY STACK</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* STICKY FOOTER ACTIONS */}
            <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-[#0c0e11]/95 backdrop-blur-md border-t border-white/[0.08]">
              <div className="text-[11px] font-mono text-gray-500 hidden sm:block">
                {project.context?.includes("Institutional")
                  ? "Status: Institutional Deployment"
                  : project.context?.includes("Collaborative")
                  ? "Status: Collaborative System"
                  : project.context?.includes("Hackathon")
                  ? "Status: Hackathon Prototype"
                  : "Status: Validated Project"}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-gray-200 hover:text-white hover:border-[#23B08A]/40 hover:bg-white/[0.08] transition-all min-h-[38px] sm:min-h-[42px]"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#23B08A]" />
                    <span>Repo</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#23B08A]/15 border border-[#23B08A]/40 text-xs font-mono text-[#23B08A] hover:bg-[#23B08A]/25 transition-all min-h-[38px] sm:min-h-[42px]"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer min-h-[38px] sm:min-h-[42px]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    context: PropTypes.string,
    category: PropTypes.string,
    role: PropTypes.string,
    achievement: PropTypes.string,
    description: PropTypes.string,
    longDescription: PropTypes.string,
    contributions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      ])
    ),
    stack: PropTypes.arrayOf(PropTypes.string),
    repository: PropTypes.string,
    liveUrl: PropTypes.string,
    image: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
