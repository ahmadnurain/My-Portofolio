import { FaReact, FaLaravel, FaDatabase, FaGithub, FaArrowRight } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFilament } from "react-icons/si";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const techIcons = {
  Reactjs: <FaReact className="text-brand-blue" />,
  Laravel: <FaLaravel className="text-brand-green" />,
  TailwindCSS: <SiTailwindcss className="text-teal-500" />,
  "Framer Motion": <SiFramer className="text-gray-300" />,
  Filament: <SiFilament className="text-orange-400" />,
  MySQL: <FaDatabase className="text-gray-400" />,
  MagicUI: <img src="/OIP__3_-removebg-preview.png" alt="MagicUI" className="w-4 h-4 grayscale" />,
  Midtrans: <img src="/erasebg-transformed.webp" alt="Midtrans" className="w-4 h-4 grayscale" />,
};

const projects = [
  {
    id: 1,
    title: "Personal Linktree",
    description: "A minimalist personal link-tree website featuring engaging animations and clean aesthetics. Built with ReactJS & TailwindCSS.",
    image: "/Screenshot 2025-02-21 222913.png",
    technologies: ["Reactjs", "TailwindCSS"],
    sourceCode: "https://github.com/ahmadnurain/Link-tree",
  },
  {
    id: 2,
    title: "Chicken Crave UI",
    description: "A modern food ordering concept focused on fluid UI/UX, smooth Framer Motion animations, and responsive layout structure.",
    image: "/Screenshot (1139).png",
    technologies: ["Reactjs", "TailwindCSS", "Framer Motion"],
    sourceCode: "https://github.com/ahmadnurain/Chicken-Crave-Lomba-Web-Design",
  },
  {
    id: 3,
    title: "Wisata Majalengka",
    description: "A robust online ticket booking platform for tourist destinations with secure Midtrans digital payments.",
    image: "/Screenshot (1304).png",
    technologies: ["Laravel", "Filament", "Midtrans"],
    sourceCode: "https://github.com/ahmadnurain/Web-Pemesanan-tiket",
  },
  {
    id: 4,
    title: "Winds Tech Landing",
    description: "An advanced online course landing page delivering a highly interactive user experience utilizing MagicUI.",
    image: "/Home section.png",
    technologies: ["Reactjs", "Framer Motion", "MagicUI"],
    sourceCode: "https://github.com/ahmadnurain/Web-Design-Wind-s-Tech",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Projects = () => {
  return (
    <div className="w-full py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <SectionTitle title="Selected Work" subtitle="Projects" />
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`group flex flex-col bg-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className="p-8 pb-0 flex flex-col flex-grow relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-display font-medium text-white tracking-tight leading-tight group-hover:text-brand-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5">
                    <FaArrowRight size={14} className="-rotate-45" />
                  </a>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-gray-300 bg-black/40 border border-white/10 px-3 py-1.5 rounded-full">
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image inside Bento Card */}
              <div className="relative mt-auto mx-4 mb-4 rounded-2xl overflow-hidden border border-white/[0.05] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                 <img src={project.image} alt={project.title} className={`w-full h-64 object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100`} />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/ahmadnurain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Explore More on GitHub <FaGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
