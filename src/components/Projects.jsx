import Squares from "../blocks/Backgrounds/Squares/Squares";
import { FaReact, FaLaravel, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFilament } from "react-icons/si";

const techIcons = {
  Reactjs: <FaReact className="text-blue-400" />,
  Laravel: <FaLaravel className="text-red-500" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-purple-500" />,
  Filament: <SiFilament className="text-orange-500" />,
  MySQL: <FaDatabase className="text-yellow-400" />,

  // MagicUI & Midtrans pakai img
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

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 h-screen">
        <Squares speed={0.0} squareSize={100} direction="diagonal" borderColor="#252e33" hoverFillColor="#222" />
      </div>
      <section className="relative max-w-6xl mx-auto mt-10 px-6 md:px-24 pb-10 z-10">
        <h2 className="text-white text-3xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-black border border-white/30 rounded-lg shadow-lg overflow-hidden transform">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="flex items-center gap-1 text-xs bg-gray-900 border border-white/30 text-white px-2 py-1 rounded-xl">
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="block mt-4 text-center border border-white/40 text-white text-sm font-bold py-2 rounded-xl transition duration-300 hover:scale-105">
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
