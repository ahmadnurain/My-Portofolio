const Footer = () => {
  return (
    <footer className="relative z-10 w-full min-h-[64px] sm:h-20 py-5 sm:py-0 bg-[#101214] border-t border-white/[0.08] flex items-center shadow-2xl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-[13px] text-gray-400">
        <p>© {new Date().getFullYear()} Ahmad Nur&apos;Ain</p>
        <div className="flex items-center gap-5 sm:gap-6 font-medium">
          <a
            className="hover:text-[#23B08A] transition-colors"
            href="https://github.com/ahmadnurain"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-[#23B08A] transition-colors"
            href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-[#23B08A] transition-colors"
            href="mailto:ahmadnurain84@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
