import { useState } from "react";
import { GoDownload } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { MdClose, MdWorkOutline, MdSchool } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JS" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  const certificates = [
    { src: "/certificate codepolitan html_page-0001.jpg" },
    { src: "/certificate codepolitan mengenal pemrograman _page-0001.jpg" },
    { src: "/certificate_page-0001.jpg" },
    { src: "/sertifikat pelatihan jwd_3_page-0001.jpg" },
  ];

  return (
    <div className="w-full py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionTitle title="About & Career" subtitle="My Story" />
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Profile / Description */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-200">Crafting</span> <span className="text-gray-400 font-light italic">clean code</span> &<br className="hidden lg:block" /> intuitive
                designs.
              </h2>
              <div className="text-gray-400 text-base md:text-lg leading-relaxed space-y-4 font-light mb-8 max-w-2xl mx-auto lg:mx-0">
                <p>I'm a Fullstack Developer in Indonesia, focused on building scalable, robust web apps. I translate complex problems into user-friendly digital experiences.</p>
                <p>I constantly explore new frameworks and backend architectures to become a well-rounded software engineer.</p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank")}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-[1.02] shadow-lg"
                >
                  Download Resume <GoDownload size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] opacity-60"></div>
                <img
                  src="/IMG_5sw456.JPG"
                  alt="Ahmad Profile"
                  className="relative w-full h-full object-cover object-center rounded-full  transition-all duration-700 hover:grayscale-0 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
                />
              </div>
            </motion.div>
          </div>

          {/* Education & Experience (Journey) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Experience Column */}
              <div>
                <h3 className="text-base font-medium text-white tracking-wide flex items-center gap-2 border-b border-white/10 pb-3 mb-6">
                  <MdWorkOutline className="text-brand-blue" size={20} /> Experience
                </h3>

                <div className="relative border-l border-white/10 pl-5 space-y-8 hover:border-brand-blue/30 transition-colors">
                  <div className="relative group">
                    <div className="absolute w-3 h-3 rounded-full bg-[#050505] border-[1.5px] border-brand-blue -left-[26px] top-1 group-hover:scale-125 transition-transform" />
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-blue mb-1">Sep 2023 - Oct 2023</div>
                    <h4 className="text-base font-semibold text-white group-hover:text-brand-blue transition-colors mb-1">Frontend Core Initiative</h4>
                    <p className="text-gray-400 text-xs font-light mb-2">Rakamin Academy</p>
                    <p className="text-gray-500 text-xs leading-relaxed">Built project-based virtual modules and mastered core frontend frameworks.</p>
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h3 className="text-base font-medium text-white tracking-wide flex items-center gap-2 border-b border-white/10 pb-3 mb-6">
                  <MdSchool className="text-brand-green" size={20} /> Education
                </h3>

                <div className="relative border-l border-white/10 pl-5 space-y-8 hover:border-brand-green/30 transition-colors">
                  <div className="relative group">
                    <div className="absolute w-3 h-3 rounded-full bg-[#050505] border-[1.5px] border-brand-green -left-[26px] top-1 group-hover:scale-125 transition-transform" />
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-green mb-1">2023 - Present</div>
                    <h4 className="text-base font-semibold text-white group-hover:text-brand-green transition-colors mb-1">Informatics Engineering</h4>
                    <p className="text-gray-400 text-xs font-light mb-2">Universitas Majalengka</p>
                    <p className="text-gray-500 text-xs leading-relaxed">Studying core computer science, algorithm development, and modern SWE practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack & Certs Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-6 md:p-8"
            >
              <h3 className="text-sm font-medium text-white tracking-wider uppercase mb-6">Tech Stack</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 shrink-0">
                    <div className="text-2xl text-gray-400 mb-2">{skill.icon}</div>
                    <span className="text-[10px] font-mono text-gray-500">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-6 md:p-8"
            >
              <h3 className="text-sm font-medium text-white tracking-wider uppercase mb-6">Certifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {certificates.map((cert, index) => (
                  <div key={index} onClick={() => setSelectedCert(cert.src)} className="group relative aspect-video overflow-hidden rounded-xl bg-black border border-white/10 hover:border-white/30 cursor-pointer transition-all">
                    <img src={cert.src} alt={`Certificate ${index + 1}`} className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Expand</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl px-4" onClick={() => setSelectedCert(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all border border-white/10 shadow-lg" onClick={() => setSelectedCert(null)}>
              <MdClose size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedCert}
              alt="Certificate View"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
