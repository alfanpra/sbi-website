type LogoProps = {
  className?: string;
  compact?: boolean;
};

export default function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <span className={`logo ${className}`}>
      <svg
        className="logo-mark"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="36" cy="36" r="35" fill="var(--deep-ocean)" stroke="var(--trade-gold)" strokeWidth="1.5" />
        <path
          d="M18 44c5.5-3.2 9.5-3.2 14.5 0s9.5 3.2 15 0 9.2-3.2 14.5 0"
          fill="none"
          stroke="var(--trade-gold)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 50c5.5-3.2 9.5-3.2 14.5 0s9.5 3.2 15 0 9.2-3.2 14.5 0"
          fill="none"
          stroke="var(--trade-gold)"
          strokeWidth="1.1"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path d="M36 14 L50 42 H22 Z" fill="var(--ocean)" />
        <path d="M36 14 L50 42 H36 Z" fill="var(--current)" />
        <path
          d="M36 18 L36 40"
          stroke="var(--text-on-dark)"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <path
          d="M48 18c2.4 0.4 4.2 2.2 4.6 4.4 -1.8-0.4-3.4-0.2-4.8 1.2 0.1-2.2 0.2-4 0.2-5.6z"
          fill="var(--trade-gold)"
        />
        <circle cx="24" cy="28" r="1.4" fill="var(--trade-gold-dim)" />
      </svg>
      <span className="logo-text">
        <span className="logo-name">Samudra Biru</span>
        {!compact && <span className="logo-sub">Indonesia</span>}
      </span>
    </span>
  );
}
