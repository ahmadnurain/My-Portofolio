import PropTypes from "prop-types";

/**
 * BorderBeam - Inspired by Magic UI (https://magicui.design/docs/components/border-beam)
 * A subtle, continuous laser beam of light traveling seamlessly along the perimeter of a container.
 * Eliminates static boxy borders and highlights featured cards with high-precision craftsmanship.
 */
const BorderBeam = ({
  className = "",
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#23B08A",
  colorTo = "#26C6A3",
  delay = 0,
}) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] [animation-delay:var(--delay)] [animation-duration:var(--duration)] [animation-iteration-count:infinite] [animation-name:border-beam-spin] [animation-timing-function:linear] [background:radial-gradient(circle_at_center,var(--color-from)_0%,var(--color-to)_40%,transparent_75%)] [offset-anchor:calc(var(--anchor))_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]"
        style={{
          width: `${size}px`,
        }}
      />
    </div>
  );
};

BorderBeam.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  duration: PropTypes.number,
  borderWidth: PropTypes.number,
  anchor: PropTypes.number,
  colorFrom: PropTypes.string,
  colorTo: PropTypes.string,
  delay: PropTypes.number,
};

export default BorderBeam;
