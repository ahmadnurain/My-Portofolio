import { GoDownload } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaReact, FaLaravel, FaNodeJs, FaPython, FaGitAlt, FaLinux, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";
import Squares from "../blocks/Backgrounds/Squares/Squares";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-300 text-2xl" />, name: "JavaScript" },
    { icon: <FaPhp className="text-indigo-500 text-2xl" />, name: "PHP" },
    { icon: <FaBootstrap className="text-purple-600 text-2xl" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-sky-500 text-2xl" />, name: "TailwindCSS" },
    { icon: <FaReact className="text-sky-500 text-2xl" />, name: "ReactJS" },
    { icon: <FaLaravel className="text-red-600 text-2xl" />, name: "Laravel" },
    { icon: <FaNodeJs className="text-green-500 text-2xl" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-500 text-2xl" />, name: "Express.js" },
    { icon: <SiMysql className="text-blue-600 text-2xl" />, name: "MySQL" },
    { icon: <FaDatabase className="text-blue-500 text-2xl" />, name: "Database" },
    { icon: <FaLinux className="text-gray-400 text-2xl" />, name: "Linux" },
    { icon: <FaPython className="text-yellow-400 text-2xl" />, name: "Python" },
    { icon: <FaGitAlt className="text-red-500 text-2xl" />, name: "Git" },
    { icon: <FaFigma className="text-purple-500 text-2xl" />, name: "Figma" },
  ];

  const certificates = [
    { src: "/certificate codepolitan html_page-0001.jpg", orientation: "landscape" },
    { src: "/certificate codepolitan mengenal pemrograman _page-0001.jpg", orientation: "landscape" },
    { src: "/certificate_page-0001.jpg", orientation: "landscape" },
    { src: "/sertifikat_course_570_2603325_100823231029_page-0001.jpg", orientation: "landscape" },
    { src: "/sertifikat_course_123_2603325_220623080050_page-0001.jpg", orientation: "landscape" },
    { src: "/sertifikat pelatihan jwd_3_page-0001.jpg", orientation: "landscape" },
    { src: "/Sertifikat talenthub Kemenaker Ahmad Nur Ain (2).png", orientation: "portrait" },
    { src: "/30 (1).png", orientation: "portrait" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 h-full z-0">
        <Squares speed={0.1} squareSize={50} direction="diagonal" borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3 className="text-cyan-400 font-mono text-xl mb-2">&lt;Hello /&gt;</h3>
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ahmad Nur Ain</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-cyan-500/30 pl-6">
                A passionate Fullstack Developer who loves building scalable web applications. I specialize in turning complex problems into simple, beautiful, and intuitive interface designs.
              </p>

              <button
                onClick={() => window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank")}
                className="group relative px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono font-bold rounded-lg overflow-hidden transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <GoDownload className="text-xl" />
                  Download Resume
                </span>
              </button>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              {/* Tech Circle Background */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 border border-cyan-500/20 rounded-full"></div>

              <img src="/IMG_5sw456.JPG" alt="Profile" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-black z-10" />
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400">01.</span> Tech Stack
            <span className="h-px bg-gray-800 flex-1 ml-4"></span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{skill.icon}</div>
                <span className="text-xs text-gray-400 group-hover:text-cyan-300 font-mono">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Education */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-cyan-400">02.</span> Education
            </h3>
            <div className="relative pl-8 border-l border-cyan-500/20 space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute -left-[41px] bg-black border-2 border-cyan-500 w-5 h-5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="bg-gradient-to-r from-white/5 to-transparent border-l-4 border-cyan-500 p-6 rounded-r-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/Logo-Universitas-Majalengka (1).png" alt="Unma" className="w-12 h-12 rounded-full bg-white p-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Universitas Majalengka</h3>
                      <p className="text-cyan-400 text-sm font-mono">Informatics Engineering</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-mono">2023 - Present</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> Experience
            </h3>
            <div className="relative pl-8 border-l border-cyan-500/20 space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute -left-[41px] bg-black border-2 border-cyan-500 w-5 h-5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="bg-gradient-to-r from-white/5 to-transparent border-l-4 border-cyan-500 p-6 rounded-r-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/rsz_1675850058179-removebg-preview.png" alt="Rakamin" className="w-12 h-12 rounded-full bg-white p-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Rakamin Academy</h3>
                      <p className="text-cyan-400 text-sm font-mono">Frontend Core Initiative</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-mono">Sep 2023 - Oct 2023</p>
                  <p className="text-gray-500 text-xs mt-2 italic">Project-Based Virtual Intern</p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Certificates */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400">04.</span> Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={cert.src} alt={`Certificate ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-cyan-400 text-sm font-mono font-bold border-b border-cyan-400 pb-1">View Certificate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
