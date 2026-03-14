/**
 * SectionDivider – a decorative wavy SVG that sits between two sections.
 * Uses CSS classes so colors stay within the design system.
 * `className` controls the fill color (e.g. `text-background`, `text-muted`).
 * `flip` flips it vertically so it can serve as both top and bottom caps.
 */
const waves = {
  wave: "M0,64 C120,100 240,20 360,64 C480,108 600,28 720,64 C840,100 960,20 1080,64 C1200,108 1320,28 1440,64 L1440,128 L0,128 Z",
  paint: "M0,96 C80,20 160,100 320,50 C480,0 640,90 800,60 C960,30 1120,100 1280,50 C1360,25 1400,80 1440,70 L1440,128 L0,128 Z",
  blob: "M0,80 Q180,20 360,80 Q540,128 720,64 Q900,0 1080,80 Q1260,128 1440,64 L1440,128 L0,128 Z",
};

interface Props {
  variant?: keyof typeof waves;
  className?: string; // fill color via text-* class
  flip?: boolean;
  shadow?: boolean;
  gradient?: { from: string; to: string; id?: string };
}

let gradientCounter = 0;

const SectionDivider = ({ variant = "wave", className = "text-background", flip = false, shadow = false, gradient }: Props) => {
  const gradientId = gradient?.id || `divider-grad-${++gradientCounter}`;

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className={`block w-full h-16 md:h-20 ${gradient ? "" : className}`}
        xmlns="http://www.w3.org/2000/svg"
        style={shadow ? { filter: "drop-shadow(0 -4px 6px rgba(0,0,0,0.08))" } : undefined}
      >
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          </defs>
        )}
        <path d={waves[variant]} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
      </svg>
    </div>
  );
};

export default SectionDivider;
