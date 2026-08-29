const FLAG_COLORS = ["#4E7FA8", "#F3EDE0", "#C2410C", "#5B7F5E", "#D97706"];

function pointOnCord(t: number) {
  const x = t * 1200;
  const y = Math.pow(1 - t, 2) * 16 + 2 * (1 - t) * t * 86 + t * t * 16;
  return { x, y };
}

export default function PrayerFlags() {
  const flags = Array.from({ length: 15 }, (_, i) => {
    const t = (i + 0.5) / 15;
    return { ...pointOnCord(t), color: FLAG_COLORS[i % 5], i };
  });

  return (
    <svg
      viewBox="0 0 1200 96"
      className="pointer-events-none absolute inset-x-0 top-0 w-full text-cream/60"
      aria-hidden="true"
    >
      <path d="M0 16 Q 600 86 1200 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {flags.map(({ x, y, color, i }) => (
        <g key={i} className="flag-sway" style={{ animationDelay: `${i * 0.22}s` }}>
          <polygon
            points={`${x - 13},${y + 2} ${x + 13},${y + 2} ${x + 8},${y + 33} ${x - 8},${y + 33}`}
            fill={color}
            opacity="0.92"
          />
        </g>
      ))}
    </svg>
  );
}
