interface SectionDividerProps {
  variant?: 'paint' | 'stars' | 'party' | 'brush' | 'sparkle';
  flip?: boolean;
}

const dividerEmojis: Record<string, string[]> = {
  paint: ['🎨', '💜', '🎨'],
  stars: ['✨', '⭐', '✨'],
  party: ['🎈', '🎉', '🎈'],
  brush: ['🖌️', '💫', '🖌️'],
  sparkle: ['💖', '✨', '💖'],
};

const SectionDivider = ({ variant = 'paint', flip = false }: SectionDividerProps) => {
  const emojis = dividerEmojis[variant];

  return (
    <div className={`relative py-4 flex items-center justify-center gap-4 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      {/* Decorative line left */}
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/20" />

      {/* Animated emojis */}
      <span className="text-lg animate-float" style={{ animationDelay: '0s' }}>{emojis[0]}</span>
      <span className="text-xl animate-wiggle" style={{ animationDelay: '0.3s' }}>{emojis[1]}</span>
      <span className="text-lg animate-float" style={{ animationDelay: '0.6s' }}>{emojis[2]}</span>

      {/* Decorative line right */}
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/20" />
    </div>
  );
};

export default SectionDivider;
