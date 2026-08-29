type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function KnotMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M7 7h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4z" />
      <path d="M11 3h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
    </svg>
  );
}

export function DranyenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="16.5" r="4.6" />
      <circle cx="12" cy="16.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 11.9V3.5" />
      <path d="M9.6 4.2h4.8M9.6 6.6h4.8" />
      <path d="M10.9 8.6v3.6M13.1 8.6v3.6" />
    </svg>
  );
}

export function BowlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4.5 10.5h15" />
      <path d="M5 10.5c.6 4.3 3.2 7.1 7 7.1s6.4-2.8 7-7.1" />
      <path d="M16.2 3.4l4 4" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 3c2.6 2.9 4.6 5.6 4.6 8.4a4.6 4.6 0 0 1-9.2 0C7.4 8.6 9.4 5.9 12 3z" />
      <path d="M12 17.6c-1.3-1-2-2-2-3.1 0-.9.6-1.9 2-3.3 1.4 1.4 2 2.4 2 3.3 0 1.1-.7 2.1-2 3.1z" />
    </svg>
  );
}

export function LotusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 4c1.8 2.3 2.7 4.4 2.7 6.3A2.7 2.7 0 0 1 12 13a2.7 2.7 0 0 1-2.7-2.7C9.3 8.4 10.2 6.3 12 4z" />
      <path d="M4.8 8.6c2.6 1 4.4 2.7 5.2 4.9M19.2 8.6c-2.6 1-4.4 2.7-5.2 4.9" />
      <path d="M4.2 14.6c1.7 3.1 4.4 4.7 7.8 4.7s6.1-1.6 7.8-4.7c-2.5-.6-5.1-.9-7.8-.9s-5.3.3-7.8.9z" />
    </svg>
  );
}

export function MountainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 18.5L9.5 7l3.4 5.4L15.4 9l5.6 9.5H3z" />
      <circle cx="17.5" cy="5.5" r="1.8" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8.2 5.4v13.2L19 12z" fill="currentColor" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="7" y="5.5" width="3.2" height="13" rx="1" fill="currentColor" />
      <rect x="13.8" y="5.5" width="3.2" height="13" rx="1" fill="currentColor" />
    </svg>
  );
}

export function SkipForwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 6l8 6-8 6V6z" fill="currentColor" stroke="none" />
      <path d="M17.5 6v12" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M13.5 5H19v5.5M19 5l-8.5 8.5" />
      <path d="M19 13.5V17a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7.5A2.5 2.5 0 0 1 7 5h3.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 9.5l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7.5l7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M15.5 4.5H13a3.5 3.5 0 0 0-3.5 3.5v2.5H7v3h2.5V20h3v-6.5H15l.5-3h-3V8a1 1 0 0 1 1-1h2z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5z" />
      <path d="M10.2 9.4l4.8 2.6-4.8 2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}
