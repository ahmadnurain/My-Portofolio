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
        <Squares speed={0.0} squareSize={100} direction="diagonal" borderColor="#252e33" hoverFillColor="#222" />
      </div>

      <section className="flex flex-1 flex-col items-center justify-center h-screen text-center px-6 ">
        {/* Judul */}
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10">
          <span className="text-sky-600">Hallo! I&apos;m</span> Ahmad Nur Ain
        </h1>

        {/* Paragraf */}
        <p className="mt-7 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl z-10 ">
          I&apos;m a passionate <span className="text-sky-600 ">Fullstack Developer.</span> I love coding, problem-solving, and creating intuitive user experiences.
        </p>
        <div className="flex gap-6 mt-16 z-10">
          <button onClick={() => navigate("/about")} className="px-7 py-2 bg-white/20 rounded-xl text-white font-semibold text-lg hover:bg-white/25 transition duration-300 cursor-pointer ">
            About
          </button>
          <button className="px-8 py-3 border border-white bg-white/20 rounded-xl font-semibold text-white flex items-center gap-2 text-lg hover:bg-white/25 transition duration-300 cursor-pointer" onClick={handleCopy}>
            {copied ? <MdCheck /> : <MdContentCopy />}
            {copied ? "Copied!" : "Email"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Herosection;
