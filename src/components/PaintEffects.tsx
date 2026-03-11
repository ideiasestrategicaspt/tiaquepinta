import { CSSProperties } from "react";

const PaintSplash = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 100 20 C 130 20, 170 50, 160 90 C 155 110, 140 120, 150 145 C 155 160, 140 180, 120 175 C 100 170, 95 150, 80 155 C 60 162, 40 150, 35 130 C 30 110, 45 90, 40 70 C 35 45, 65 20, 100 20 Z"
      fill="currentColor"
      opacity="0.12"
    />
  </svg>
);

const BrushStroke = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 5 20 Q 30 5, 75 18 Q 120 32, 150 15 Q 185 0, 225 22 Q 260 38, 295 18"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
      opacity="0.1"
      strokeLinecap="round"
      className="animate-brush-draw"
    />
  </svg>
);

export { PaintSplash, BrushStroke };
