import { FaReact, FaLaravel, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFilament } from "react-icons/si";
import { motion } from "framer-motion";
import Squares from "../blocks/Backgrounds/Squares/Squares";
import SectionTitle from "./SectionTitle";

const techIcons = {
  Reactjs: <FaReact className="text-blue-400" />,
  Laravel: <FaLaravel className="text-red-500" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-purple-500" />,
  Filament: <SiFilament className="text-orange-500" />,
  MySQL: <FaDatabase className="text-yellow-400" />,
  MagicUI: <img src="/OIP__3_-removebg-preview.png" alt="MagicUI" className="w-5 h-5" />,
  Midtrans: <img src="/erasebg-transformed.webp" alt="Midtrans" className="w-5 h-5" />,
};

const projects = [
  {
    id: 1,
    title: "Personal Linktree",
    description:
      "This Personal Link-Tree website showcases Ahmad Nur Ain's profile with engaging animations. Built with ReactJS & TailwindCSS, it features a profile picture, animated text, location, education, and links to LinkedIn, GitHub, and Instagram.",
    image: "/Screenshot 2025-02-21 222913.png",
    technologies: ["Reactjs", "TailwindCSS"],
    sourceCode: "https://github.com/ahmadnurain/Link-tree",
  },
  {
    id: 2,
    title: "Chicken Crave",
    description:
      "Chicken Crave is a food ordering website designed with ReactJS, TailwindCSS, and Framer Motion. This project focuses on the frontend design, featuring an intuitive UI/UX, smooth animations, and a responsive layout. Users can browse the menu, add items to their cart, and simulate the online payment process.",
    image: "/Screenshot (1139).png",
    technologies: ["Reactjs", "TailwindCSS", "Framer Motion"],
    sourceCode: "https://github.com/ahmadnurain/Chicken-Crave-Lomba-Web-Design",
  },
  {
    id: 3,
    title: "Wisata Majalengka",
    description:
      "Wisata Majalengka is an online ticket booking website for various tourist destinations in Majalengka. Built with Laravel, TailwindCSS, Filament, Midtrans, and MySQL, it allows tourists and locals to book tickets online and make secure digital payments easily.",
    image: "/Screenshot (1304).png",
    technologies: ["Laravel", "TailwindCSS", "Filament", "Midtrans", "MySQL"],
    sourceCode: "https://github.com/ahmadnurain/Web-Pemesanan-tiket",
  },
  {
    id: 4,
    title: "Winds Tech",
    description:
      "Wind's Tech is an online course landing page built with ReactJS, TailwindCSS, Framer Motion, and MagicUI. It features a modern, responsive design with smooth animations, providing an engaging and interactive user experience.",
    image: "/Home section.png",
    technologies: ["Reactjs", "TailwindCSS", "Framer Motion", "MagicUI"],
    sourceCode: "https://github.com/ahmadnurain/Web-Design-Wind-s-Tech",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 h-full z-0">
        <Squares speed={0.1} squareSize={50} direction="diagonal" borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <SectionTitle title="Featured Projects" subtitle="My Work" />

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

                {/* Overlay Tech Icons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    <FaGithub className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <span className="text-xs font-mono font-normal text-gray-500 border border-gray-700 px-2 py-0.5 rounded">v1.0</span>
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="flex items-center gap-1.5 text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full">
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Source Code
                    <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
