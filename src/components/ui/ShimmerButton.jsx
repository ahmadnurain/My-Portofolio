import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * ShimmerButton - Inspired by Magic UI (https://magicui.design/docs/components/shimmer-button)
 * Tactile, interactive button featuring an elegant continuous shimmer effect along its boundary.
 * Renders as a semantic button, React Router Link, or external anchor with WCAG AA compliance.
 */
const ShimmerButton = ({
  children,
  to,
  href,
  onClick,
  className = "",
  shimmerColor = "rgba(35, 176, 138, 0.4)",
  shimmerSize = "0.08em",
  borderRadius = "9999px",
  shimmerDuration = "3s",
  background = "rgba(4, 17, 13, 0.95)",
  ...props
}) => {
  const commonStyles = {
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  };

  const containerClasses = `group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white [background:var(--bg)] [border-radius:var(--radius)] shadow-lg hover:shadow-[#23B08A]/15 active:scale-[0.98] transition-all min-h-[44px] ${className}`;

  const InnerContent = (
    <>
      {/* Traveling Shimmer Spark */}
      <div
        className="pointer-events-none absolute -inset-full animate-shimmer-slide [background:conic-gradient(from_0deg_at_50%_50%,var(--shimmer-color)_0deg,transparent_60deg,transparent_300deg,var(--shimmer-color)_360deg)] [animation-duration:var(--speed)] [animation-iteration-count:infinite] [animation-timing-function:linear] opacity-70 group-hover:opacity-100 transition-opacity"
      />

      {/* Surface Mask Backdrop */}
      <div className="absolute inset-[1px] [border-radius:calc(var(--radius)-1px)] bg-[#07130f] transition-colors group-hover:bg-[#0a1b16]" />

      {/* Button Content */}
      <span className="relative z-10 inline-flex items-center gap-2 text-[#23B08A] group-hover:text-white transition-colors">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} style={commonStyles} className={containerClasses} {...props}>
        {InnerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={commonStyles}
        className={containerClasses}
        {...props}
      >
        {InnerContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={commonStyles}
      className={containerClasses}
      {...props}
    >
      {InnerContent}
    </button>
  );
};

ShimmerButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  shimmerColor: PropTypes.string,
  shimmerSize: PropTypes.string,
  borderRadius: PropTypes.string,
  shimmerDuration: PropTypes.string,
  background: PropTypes.string,
};

export default ShimmerButton;
