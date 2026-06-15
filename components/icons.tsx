type IconProps = { size?: number };

export const IconArrow = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const IconClose = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export const IconCheck = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export const IconMenu = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M4 7h16M4 17h16" />
  </svg>
);

export const IconQuote = ({ size = 28 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
    <path d="M9.5 7C5.4 7 3 9.9 3 14v11h10V14H8c0-2.7 1.7-4 3.5-4V7H9.5zM23.5 7C19.4 7 17 9.9 17 14v11h10V14h-5c0-2.7 1.7-4 3.5-4V7h-2z" />
  </svg>
);
