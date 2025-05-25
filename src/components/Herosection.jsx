import Squares from "../blocks/Backgrounds/Squares/Squares";
import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Herosection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ahmadnurain82@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed inset-0 h-screen">
        <Squares speed={0.0} squareSize={100} direction="diagonal" borderColor="oklch(71.5% 0.143 215.221)" hoverFillColor="#222" />
      </div>

      <section className="flex flex-1 flex-col items-center justify-center h-screen text-center px-6 ">
        {/* Judul */}
        <h1
          className="text-4xl md:text-6xl font-bold text-white z-10"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="0" // muncul lebih dulu
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hallo! I&apos;m</span> Ahmad Nur Ain
        </h1>

        <p
          className="mt-7 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl z-10"
          data-aos="fade-up"
          data-aos-duration="1700"
          data-aos-delay="300" // muncul setelah judul
        >
          I&apos;m a passionate <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Fullstack Developer.</span> I love coding, problem-solving, and creating intuitive user experiences.
        </p>

        <div className="flex gap-6 mt-16 z-10" data-aos="fade-up" data-aos-duration="1700" data-aos-delay="600">
          <button
            onClick={() => navigate("/about")}
            className="px-7 py-2 backdrop-blur-md bg-black/50 border-3 border-blue-500/30 overflow-hidden relative rounded-xl text-white font-semibold text-lg hover:scale-105 hover:inset-0 hover:bg-gradient-to-r from-blue-600/20 to-cyan-600/20 transition duration-300 cursor-pointer "
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">About</span>
          </button>
          <button
            className="px-8 py-3  backdrop-blur-md bg-black/50 border-3 border-blue-500/30 overflow-hidden relative rounded-xl font-semibold text-white flex items-center gap-2 text-lg hover:scale-105  hover:inset-0 hover:bg-gradient-to-r from-blue-600/20 to-cyan-600/20 duration-300 cursor-pointer"
            onClick={handleCopy}
          >
            <div className="inline-flex items-center gap-1">
              {copied ? <MdCheck className="text-cyan-400" /> : <MdContentCopy className="text-cyan-400" />}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{copied ? "Copied!" : "Email"}</span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Herosection;
