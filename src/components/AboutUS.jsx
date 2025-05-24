import { GoDownload } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaReact, FaLaravel, FaNodeJs, FaPython, FaGitAlt, FaLinux, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";
import Squares from "../blocks/Backgrounds/Squares/Squares";

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
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 h-screen">
        <Squares speed={0.0} squareSize={100} direction="diagonal" borderColor="#252e33" hoverFillColor="#222" />
      </div>

      <section className="relative flex flex-col md:flex-row items-center justify-between py-20 max-w-6xl px-6 md:px-14 mx-auto w-full md:pl-24 z-10">
        <div className="w-full md:w-1/2 text-center md:text-left order-2 lg:order-1 md:order-1">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="0">
            Ahmad Nur Ain
          </h1>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-xl md:text-3xl font-semibold mb-6" data-aos="fade-up" data-aos-duration="1700" data-aos-delay="0">
            Fullstack Developer
          </h2>
          <p className="text-gray-300 text-base md:text-xl mb-6 px-4 lg:px-0 md:px-0" data-aos="fade-right" data-aos-duration="1700" data-aos-delay="300">
            I am a passionate developer who loves building scalable web applications, solving challenging problems, and learning new technologies. I specialize in frontend and backend development to create seamless digital experiences.
          </p>
          <button
            onClick={() => window.open("https://docs.google.com/document/d/1fALeu2bNIOs_FfKvHwSUY8lVAT1uByw8wubohEn1Qg4/edit?usp=sharing", "_blank")}
            className="px-5 py-3 mt-6 md:mt-8 backdrop-blur-sm bg-black/50 rounded-xl border-3 border-blue-500/30 text-white font-semibold text-base md:text-lg flex items-center gap-2 transition duration-300 cursor-pointer mx-auto md:mx-0 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:scale-110"
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-delay="600"
          >
            <GoDownload className="text-lg md:text-xl text-cyan-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Download Resume</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 mb-7 order-1 lg:order-2 md:order-2" data-aos="flip-left" data-aos-duration="1700" data-aos-delay="900">
          <img src="/IMG_5sw456.JPG" alt="Profile" className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto mt-10 px-6 md:px-24 pb-10 z-10">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold text-start mb-6 md:mb-8" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="900">
          Tech Stack & Skills
        </h2>
        <div className="flex flex-wrap justify-start gap-3" data-aos="fade-up" data-aos-duration="1700">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3 bg-black border-1  border-blue-500/30 px-3 py-2 rounded-lg transition-transform hover:scale-105">
              {skill.icon}
              <span className="text-white text-sm md:text-base lg:text-base font-light">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto mt-10 px-6 md:px-24 pb-3 z-10">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold text-start mb-6 md:mb-8" data-aos="fade-down" data-aos-duration="1700">
          Educations
        </h2>

        {/* Container dengan Garis Vertikal */}
        <div className="relative pl-6">
          {/* Garis Vertikal */}
          <div className="absolute left-7 top-0 w-0.5 bg-cyan-500  h-full" data-aos="fade-up" data-aos-duration="1700" data-aos-delay="300"></div>

          {/* Pengalaman 1 - Freelance */}
          <div className="relative flex items-start gap-6 mb-10 -ml-6">
            {/* Ikon */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-gray-600" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="300">
              <img src="/Logo-Universitas-Majalengka (1).png" alt="Freelance" className="w-10 h-10 rounded-full" />
            </div>

            {/* Konten */}
            <div data-aos="fade-left" data-aos-duration="1700" data-aos-delay="300">
              <p className="text-gray-400 text-sm">2023 - Present</p>
              <h3 className="text-white text-sm lg:text-lg md:text-lg font-semibold">Universitas Majalengka</h3>
              <p className="text-gray-300">Informatics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto mt-10 px-6 md:px-24 pb-10 z-10">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold text-start mb-6 md:mb-8" data-aos="fade-down" data-aos-duration="1700">
          Experiences
        </h2>

        {/* Container dengan Garis Vertikal */}
        <div className="relative pl-6">
          {/* Garis Vertikal */}
          <div className="absolute left-7 top-0 w-0.5 bg-cyan-500 h-full" data-aos="fade-up" data-aos-duration="1700" data-aos-delay="300"></div>

          {/* Pengalaman 1 - Freelance */}
          <div className="relative flex items-start gap-6 mb-10 -ml-6">
            {/* Ikon */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-gray-600" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="300">
              <img src="/rsz_1675850058179-removebg-preview.png" alt="Freelance" className="w-10 h-10 rounded-full" />
            </div>

            {/* Konten */}
            <div data-aos="fade-left" data-aos-duration="1700" data-aos-delay="300">
              <p className="text-gray-400 text-sm">Septermber 2023 - Oktober 2023</p>
              <h3 className="text-white text-sm lg:text-lg md:text-lg font-semibold">
                Project-Based <br />
                Virtual Intern: Frontend Core Initiative <br />
                Studio x Rakamin Academy
              </h3>
              <p className="text-gray-300">Intern</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto mt-10 px-6 md:px-24 pb-10 z-10">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold text-start mb-6 md:mb-8" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="300">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 border">
          {certificates.map((cert, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border-4  border-gray-600 shadow-lg" data-aos="flip-right" data-aos-duration="1700" data-aos-delay="300">
              <img
                src={cert.src}
                alt={`Certificate ${index + 1}`}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105
            ${cert.orientation === "portrait" ? "aspect-[3/4]" : ""}
          `}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
