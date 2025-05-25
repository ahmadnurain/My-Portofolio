import { CiHome, CiFolderOn, CiUser } from "react-icons/ci";
// import { RiContactsBook3Line } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom"; // Tambahkan ini

const Sidebar = ({ onClose }) => {
  const location = useLocation(); // Dapatkan URL saat ini

  // Fungsi untuk menentukan apakah menu aktif
  const isActiveBg = (path) => (location.pathname === path ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20" : "bg-transparent");
  const isActiveText = (path) => (location.pathname === path ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" : "text-gray-400");

  return (
    <div className="w-80 h-screen bg-black backdrop-blur-lg text-white flex flex-col items-center p-5 shadow-md z-10 relative">
      <div className="absolute -top-10 right-4  w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-4  w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

      {/* Tombol Close untuk Mobile */}
      <button className="absolute top-4 right-4 text-3xl md:hidden text-cyan-500" onClick={onClose}>
        <MdClose />
      </button>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6 -ml-14">
        <img src="/IMG_5sw456.JPG" alt="Profile" className="w-20 h-20 rounded-lg object-cover" data-aos="fade-right" data-aos-duration="1700" />
        <div>
          <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" data-aos="fade-down" data-aos-duration="1700" data-aos-delay="300">
            Ahmad Nur Ain
          </h2>
          <p className="text-sm text-gray-500 " data-aos="fade-up" data-aos-duration="1700" data-aos-delay="900">
            Fullstack Developer
          </p>
        </div>
      </div>
      <div className="relative w-80" data-aos="fade-right" data-aos-duration="1700" data-aos-delay="900">
        {/* Garis utama */}
        <hr className="w-full h-[2px] border-0 bg-gradient-to-r from-cyan-400 to-blue-500" />

        {/* Glow di bawah garis */}
        <div
          className="absolute top-full left-0 w-full h-16 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-40 blur-2xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      {/* Menu Section */}
      <nav className="w-full mt-7">
        <ul className="space-y-7 text-xl px-2">
          <li data-aos="fade-left" data-aos-duration="1700" data-aos-delay="300">
            <Link to="/" className={`group p-3 font-medium rounded-2xl flex items-center gap-3 transition duration-300 cursor-pointer ${isActiveBg("/")} ${location.pathname === "/" ? "" : "hover:bg-white/20"}`}>
              <CiHome className={`${location.pathname === "/" ? "text-cyan-400" : "text-gray-400"} group-hover:text-white transition duration-300`} />
              <span className={`${isActiveText("/")} ${location.pathname === "/" ? "" : "group-hover:text-white"} transition duration-300`}>Home</span>
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-duration="1700" data-aos-delay="900">
            <Link to="/projects" className={`group p-3 font-medium rounded-2xl flex items-center gap-3 transition duration-300 cursor-pointer ${isActiveBg("/projects")} ${location.pathname === "/projects" ? "" : "hover:bg-white/20"}`}>
              <CiFolderOn className={`${location.pathname === "/projects" ? "text-cyan-400" : "text-gray-400"} group-hover:text-white transition duration-300`} />
              <span className={`${isActiveText("/projects")} ${location.pathname === "/projects" ? "" : "group-hover:text-white"} transition duration-300`}>Projects</span>
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-duration="1700" data-aos-delay="1200">
            <Link to="/about" className={`group p-3 font-medium rounded-2xl flex items-center gap-3 transition duration-300 cursor-pointer ${isActiveBg("/about")} ${location.pathname === "/about" ? "" : "hover:bg-white/20"}`}>
              <CiUser className={`${location.pathname === "/about" ? "text-cyan-400" : "text-gray-400"} group-hover:text-white transition duration-300`} />
              <span className={`${isActiveText("/about")} ${location.pathname === "/about" ? "" : "group-hover:text-white"} transition duration-300`}>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-auto flex gap-9 mb-14 z-1">
        <a href="https://github.com/ahmadnurain" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-cyan-400 text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-cyan-400 text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/amdain54/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-cyan-400 text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
