import PropTypes from "prop-types";

/**
 * Marquee - Inspired by Magic UI (https://magicui.design/docs/components/marquee)
 * Seamless, infinitely scrolling ticker with pause-on-hover capability and gradient fade masks.
 * Perfect for displaying verified technologies, tools, and databases without visual clutter.
 */
const Marquee = ({
  className = "",
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:35s] [--gap:1.5rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
      style={{
        maskImage: vertical
          ? "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
          : "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: vertical
          ? "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
          : "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row"
            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  repeat: PropTypes.number,
};

export default Marquee;
