import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Check,
  Copy,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Lucide-style LinkedIn SVG matching design system
const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect height="12" width="4" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

LinkedInIcon.propTypes = {
  className: PropTypes.string,
};

// Lucide-style GitHub SVG matching Projects & Hero
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

GithubIcon.propTypes = {
  className: PropTypes.string,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Full-time Opportunity",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'mailto_opened' | 'success' | 'error' | null
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahmadnurain84@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        nextErrors.email = "Enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      /*
        ponytail: structured for future backend service integration (e.g. Resend, EmailJS, Formspree).
        Currently no form delivery backend exists in this repository.
        Prepare email with user's inputted details and trigger mailto fallback without faking backend success.
      */
      const subject = encodeURIComponent(
        `[Portfolio Inquiry: ${formData.inquiryType}] from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Hi Ahmad,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message.trim()}\n`
      );

      window.location.href = `mailto:ahmadnurain84@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus("mailto_opened");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      inquiryType: "Full-time Opportunity",
      message: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  return (
    <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-20 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Narrative & Structured Channels (~45%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#23B08A] font-semibold">
              GET IN TOUCH
            </span>
          </div>

          {/* Headline & Supporting Narrative */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#dee4df] tracking-tight leading-[1.1]">
              Let&apos;s talk about{" "}
              <span className="text-[#23B08A]">what you&apos;re building.</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-lg">
              Whether you&apos;re hiring for a development role, looking for a freelance
              developer, or want to discuss a project, feel free to reach out.
            </p>
          </div>

          {/* Minimal Structured Contact Channels */}
          <div className="w-full pt-2 sm:pt-4 space-y-1">
            {/* Channel: Email */}
            <div className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-white/[0.08] hover:border-[#23B08A]/50 transition-colors duration-150">
              <a
                href="mailto:ahmadnurain84@gmail.com"
                className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0 pr-2 focus:outline-none"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#23B08A] transition-colors shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-gray-400">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#dee4df] group-hover:text-[#23B08A] transition-colors truncate">
                    ahmadnurain84@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-[#23B08A] hover:bg-white/[0.05] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs text-[#23B08A] font-mono">
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
                <a
                  href="mailto:ahmadnurain84@gmail.com"
                  aria-label="Compose email to ahmadnurain84@gmail.com"
                  className="p-1.5 sm:p-2 rounded-lg text-gray-400 group-hover:text-[#23B08A] hover:bg-white/[0.05] transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Channel: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-white/[0.08] hover:border-[#23B08A]/50 transition-colors duration-150 focus:outline-none"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
                <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#23B08A] transition-colors shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-gray-400">
                    LinkedIn
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#dee4df] group-hover:text-[#23B08A] transition-colors truncate">
                    linkedin.com/in/ahmad-nur-ain-4a6152253
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#23B08A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Channel: GitHub */}
            <a
              href="https://github.com/ahmadnurain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-white/[0.08] hover:border-[#23B08A]/50 transition-colors duration-150 focus:outline-none"
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#23B08A] transition-colors shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-gray-400">
                    GitHub
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#dee4df] group-hover:text-[#23B08A] transition-colors truncate">
                    github.com/ahmadnurain
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#23B08A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Channel: Location */}
            <div className="flex items-center justify-between py-3.5 sm:py-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3.5 min-w-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-gray-400">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#dee4df] truncate">
                    West Java, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Statement */}
          <div className="pt-1 sm:pt-3">
            <p className="text-xs sm:text-sm text-gray-300">
              Open to full-time opportunities and selected freelance projects.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form Card (~55%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="relative bg-[#101214]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-[28px] p-4 sm:p-8 md:p-10 shadow-2xl shadow-black/70">
            {submitStatus === "success" ? (
              /* Restrained inline success presentation (ready if backend integration added) */
              <div className="py-14 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#23B08A]/10 border border-[#23B08A]/30 flex items-center justify-center text-[#23B08A] mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-[#dee4df] tracking-tight">
                  Message sent.
                </h2>
                <p className="text-sm text-gray-300 max-w-sm">
                  Thanks for reaching out. I&apos;ll review your note and get back to you as soon as possible.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-[#17191c] text-gray-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Field: Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                  >
                    Name <span className="text-[#23B08A]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Ada Lovelace"
                    className={`w-full h-[52px] rounded-xl bg-[#090f0d]/60 border px-4 text-[#dee4df] placeholder:text-gray-500 text-sm focus:outline-none transition-all duration-150 ${
                      errors.name
                        ? "border-red-400/80 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                        : "border-white/[0.12] focus:border-[#23B08A] focus:ring-2 focus:ring-[#23B08A]/20"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                  >
                    Email <span className="text-[#23B08A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="ada@computing.org"
                    className={`w-full h-[52px] rounded-xl bg-[#090f0d]/60 border px-4 text-[#dee4df] placeholder:text-gray-500 text-sm focus:outline-none transition-all duration-150 ${
                      errors.email
                        ? "border-red-400/80 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                        : "border-white/[0.12] focus:border-[#23B08A] focus:ring-2 focus:ring-[#23B08A]/20"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Field: Inquiry Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="inquiryType"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                  >
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full h-[52px] rounded-xl bg-[#090f0d]/60 border border-white/[0.12] px-4 pr-10 text-[#dee4df] text-sm focus:border-[#23B08A] focus:ring-2 focus:ring-[#23B08A]/20 focus:outline-none appearance-none transition-all duration-150 cursor-pointer"
                    >
                      <option className="bg-[#101214] text-[#dee4df]" value="Full-time Opportunity">
                        Full-time Opportunity
                      </option>
                      <option className="bg-[#101214] text-[#dee4df]" value="Freelance Project">
                        Freelance Project
                      </option>
                      <option className="bg-[#101214] text-[#dee4df]" value="Collaboration">
                        Collaboration
                      </option>
                      <option className="bg-[#101214] text-[#dee4df]" value="Other">
                        Other
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Field: Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                  >
                    Message <span className="text-[#23B08A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Tell me a little about the opportunity or project."
                    className={`w-full min-h-[160px] rounded-xl bg-[#090f0d]/60 border p-4 text-[#dee4df] placeholder:text-gray-500 text-sm focus:outline-none transition-all duration-150 resize-y ${
                      errors.message
                        ? "border-red-400/80 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                        : "border-white/[0.12] focus:border-[#23B08A] focus:ring-2 focus:ring-[#23B08A]/20"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Feedback notices */}
                {submitStatus === "mailto_opened" && (
                  <div className="p-4 rounded-xl bg-[#23B08A]/10 border border-[#23B08A]/30 text-sm text-[#dee4df] space-y-1.5">
                    <p className="font-semibold text-[#23B08A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Opening your email app
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Your message details have been prepared in your email client. If it didn&apos;t open automatically, you can email me directly at{" "}
                      <a
                        href="mailto:ahmadnurain84@gmail.com"
                        className="text-[#23B08A] underline hover:text-white"
                      >
                        ahmadnurain84@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-200 space-y-1">
                    <p className="font-medium">Something went wrong.</p>
                    <p className="text-xs text-gray-300">
                      You can also reach me directly at{" "}
                      <a
                        href="mailto:ahmadnurain84@gmail.com"
                        className="text-[#23B08A] underline hover:text-white"
                      >
                        ahmadnurain84@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] rounded-full bg-[#23B08A] hover:bg-[#1d9c7b] text-[#002117] font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_24px_rgba(35,176,138,0.2)] focus:outline-none focus:ring-2 focus:ring-[#23B08A]/40 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4 font-bold" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
