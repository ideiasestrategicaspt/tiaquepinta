interface SectionDividerProps {
  from: string;
  to: string;
  variant?: "wave" | "paint" | "drip";
  flip?: boolean;
}

const SectionDivider = ({ from, to, variant = "wave", flip = false }: SectionDividerProps) => {
  const paths = {
    wave: "M0,64 C120,100 240,20 360,64 C480,108 600,28 720,64 C840,100 960,20 1080,64 C1200,108 1320,28 1440,64 L1440,128 L0,128 Z",
    paint: "M0,96 C80,40 160,80 240,56 C320,32 400,88 480,64 C560,40 640,96 720,72 C800,48 880,80 960,56 C1040,32 1120,88 1200,64 C1280,40 1360,80 1440,56 L1440,128 L0,128 Z",
    drip: "M0,80 C60,80 60,40 120,40 C180,40 180,80 240,80 C300,80 300,20 360,20 C420,20 420,80 480,80 C540,80 540,50 600,50 C660,50 660,80 720,80 C780,80 780,30 840,30 C900,30 900,80 960,80 C1020,80 1020,45 1080,45 C1140,45 1140,80 1200,80 C1260,80 1260,25 1320,25 C1380,25 1380,80 1440,80 L1440,128 L0,128 Z",
  };

  return (
    <div
      className="relative w-full overflow-hidden -my-1"
      style={{
        height: "80px",
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} fill={to} />
      </svg>
    </div>
  );
};

export default SectionDivider;
