import { CiHome, CiFolderOn, CiUser } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-80 h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 text-white flex flex-col items-center p-6 shadow-2xl z-50 relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Close Button (Mobile) */}
      <button className="absolute top-4 right-4 text-2xl md:hidden text-gray-400 hover:text-white transition-colors z-50" onClick={onClose}>
        <MdClose />
      </button>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center text-center mt-8 mb-8 w-full">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
          <img src="/IMG_5sw456.JPG" alt="Profile" className="relative w-24 h-24 rounded-full object-cover border-2 border-black" />
        </div>
        <h2 className="mt-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Ahmad Nur Ain</h2>
        <p className="text-sm text-gray-400 mt-1">Fullstack Developer</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8 z-10" />

      {/* Navigation */}
      <nav className="w-full z-10 flex-1">
        <ul className="space-y-2">
          {[
            { path: "/", label: "Home", icon: CiHome },
            { path: "/projects", label: "Projects", icon: CiFolderOn },
            { path: "/about", label: "About", icon: CiUser },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                  isActive(item.path) ? "text-white bg-white/10 border border-white/5 shadow-lg shadow-cyan-500/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive(item.path) && <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-100" />}
                <item.icon className={`text-2xl z-10 transition-transform duration-300 ${isActive(item.path) ? "text-cyan-400 scale-110" : "group-hover:text-cyan-400 group-hover:scale-110"}`} />
                <span className="font-medium z-10">{item.label}</span>

                {isActive(item.path) && <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media */}
      <div className="mt-auto z-10 flex gap-6 pb-4">
        {[
          { href: "https://github.com/ahmadnurain", icon: FaGithub },
          { href: "https://www.linkedin.com/in/ahmad-nur-ain-4a6152253", icon: FaLinkedin },
          { href: "https://www.instagram.com/amdain54/", icon: FaInstagram },
        ].map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <social.icon className="text-2xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
