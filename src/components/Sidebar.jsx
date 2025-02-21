import { CiHome, CiFolderOn, CiUser } from "react-icons/ci";
// import { RiContactsBook3Line } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom"; // Tambahkan ini

const Sidebar = ({ onClose }) => {
  const location = useLocation(); // Dapatkan URL saat ini

  // Fungsi untuk menentukan apakah menu aktif
  const isActive = (path) => (location.pathname === path ? "bg-white/20 text-white" : "bg-transparent text-gray-400");

  return (
    <div className="w-80 h-screen bg-black backdrop-blur-lg text-white flex flex-col items-center p-5 shadow-md z-10 relative">
      {/* Tombol Close untuk Mobile */}
      <button className="absolute top-4 right-4 text-3xl md:hidden" onClick={onClose}>
        <MdClose />
      </button>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6 -ml-14">
        <img src="/IMG_5sw456.JPG" alt="Profile" className="w-20 h-20 rounded-lg object-cover" />
        <div>
          <h2 className="text-lg font-semibold">Ahmad Nur Ain</h2>
          <p className="text-sm text-gray-500">Fullstack Developer</p>
        </div>
      </div>
      <hr className="text-white/10 w-80" />

      {/* Menu Section */}
      <nav className="w-full mt-7">
        <ul className="space-y-7 text-xl px-2">
          <li>
            <Link to="/" className={`p-3 font-sans rounded-2xl flex items-center gap-3 hover:bg-white/20 transition duration-300 cursor-pointer ${isActive("/")}`}>
              <CiHome className="text-white" /> Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`p-3 font-sans rounded-2xl flex items-center gap-3 hover:bg-white/20 transition duration-300 cursor-pointer ${isActive("/projects")}`}>
              <CiFolderOn className="text-white" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className={`p-3 font-sans rounded-2xl flex items-center gap-3 hover:bg-white/20 transition duration-300 cursor-pointer ${isActive("/about")}`}>
              <CiUser className="text-white" /> About
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" className={`p-3 font-sans rounded-2xl flex items-center gap-3 hover:bg-white/20 transition duration-300 cursor-pointer ${isActive("/contact")}`}>
              <RiContactsBook3Line className="text-white" /> Contact
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-auto flex gap-9 mb-14">
        <a href="https://github.com/ahmadnurain" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/amdain54/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-3xl hover:scale-105 hover:text-gray-300 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
