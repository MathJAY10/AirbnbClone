"use client";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Airbnb logo (Bélo symbol)
export const AirbnbLogo = ({ size = 32, color = "#FF385C" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color} aria-label="Airbnb" style={{ display: "block" }}>
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179-.172.178-.257.261c-2.153 2.13-4.485 3.386-6.709 3.386-3.480 0-6.357-2.416-6.357-6.478l.001-.228.010-.415c.05-.924.293-1.805.960-3.396l.145-.353c.982-2.288 5.067-10.876 7.049-14.697l.1-.193.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33-.001.228c0 2.786 1.787 4.478 4.357 4.478 1.720 0 3.681-1.115 5.616-3.026l.537-.544.796-.851.796.85.538.545c1.935 1.911 3.896 3.026 5.616 3.026 2.57 0 4.357-1.692 4.357-4.478l-.001-.228-.009-.33c-.032-.585-.178-1.169-.605-2.24l-.345-.836C23.762 18.635 19.748 10.217 17.51 6.218l-.523-1.008C16.053 3.539 15.239 3 16 3zm0 4.15c.642 0 1.073.405 1.544 1.414l.141.294.473.991c.868 1.843 3.404 7.232 4.748 10.195l.333.727.195.428.098.218.019.043.07.156.088.201.055.131.089.22.022.055a2.98 2.98 0 0 1 .162.762l.008.214.001.113c0 1.97-1.289 3.157-3.045 3.157-1.323 0-2.78-.781-4.245-2.098l-.344-.314-.436-.41-.434.41-.344.314c-1.465 1.317-2.922 2.098-4.245 2.098-1.756 0-3.045-1.187-3.045-3.157l.001-.113.008-.214a2.98 2.98 0 0 1 .162-.762l.022-.055.089-.22.055-.131.088-.201.07-.156.019-.043.098-.218.195-.428.333-.727C11.2 17.08 13.617 11.943 14.793 9.504l.473-.991.141-.294C15.927 7.555 16.358 7.15 16 7.15z" />
  </svg>
);

// Official Airbnb Vector Logo Lockup (Bélo + Exact Brand Wordmark)
export const AirbnbFullLogo = ({ height = 32, color = "#FF385C" }: { height?: number; color?: string }) => {
  const width = Math.round(height * (102 / 32));
  return (
    <svg
      viewBox="0 0 102 32"
      width={width}
      height={height}
      fill={color}
      aria-label="Airbnb"
      style={{ display: "block" }}
    >
      {/* Bélo Icon */}
      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179-.172.178-.257.261c-2.153 2.13-4.485 3.386-6.709 3.386-3.480 0-6.357-2.416-6.357-6.478l.001-.228.010-.415c.05-.924.293-1.805.960-3.396l.145-.353c.982-2.288 5.067-10.876 7.049-14.697l.1-.193.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33-.001.228c0 2.786 1.787 4.478 4.357 4.478 1.720 0 3.681-1.115 5.616-3.026l.537-.544.796-.851.796.85.538.545c1.935 1.911 3.896 3.026 5.616 3.026 2.57 0 4.357-1.692 4.357-4.478l-.001-.228-.009-.33c-.032-.585-.178-1.169-.605-2.24l-.345-.836C23.762 18.635 19.748 10.217 17.51 6.218l-.523-1.008C16.053 3.539 15.239 3 16 3zm0 4.15c.642 0 1.073.405 1.544 1.414l.141.294.473.991c.868 1.843 3.404 7.232 4.748 10.195l.333.727.195.428.098.218.019.043.07.156.088.201.055.131.089.22.022.055a2.98 2.98 0 0 1 .162.762l.008.214.001.113c0 1.97-1.289 3.157-3.045 3.157-1.323 0-2.78-.781-4.245-2.098l-.344-.314-.436-.41-.434.41-.344.314c-1.465 1.317-2.922 2.098-4.245 2.098-1.756 0-3.045-1.187-3.045-3.157l.001-.113.008-.214a2.98 2.98 0 0 1 .162-.762l.022-.055.089-.22.055-.131.088-.201.07-.156.019-.043.098-.218.195-.428.333-.727C11.2 17.08 13.617 11.943 14.793 9.504l.473-.991.141-.294C15.927 7.555 16.358 7.15 16 7.15z" />

      {/* 'a' */}
      <path d="M41.3 15.6c-1.3 0-2.3.5-3 1.4v-1.1h-3.3v11.8h3.4v-5.8c0-2 1.3-3.3 3.1-3.3 1.8 0 2.8 1.1 2.8 3.1v6h3.4v-6.6c0-3.5-2.1-5.5-4.9-5.5z" />
      {/* 'i' */}
      <path d="M51.2 15.9h3.4v11.8h-3.4zm0-5.1h3.4v3.1h-3.4z" />
      {/* 'r' */}
      <path d="M60.4 15.9h-3.4v11.8h3.4v-6.6c0-2.2 1.3-3.1 3.1-3.1h.7v-3c-.5 0-2.5.1-3.8.9z" />
      {/* 'b' */}
      <path d="M69.2 10.8h-3.4v16.9h3.4v-1.8c.9 1.2 2.2 2 4 2 3.7 0 6.3-2.9 6.3-6.8s-2.6-6.8-6.3-6.8c-1.8 0-3.1.8-4 2zm2.2 7.6c2.1 0 3.6 1.6 3.6 4.1s-1.5 4.1-3.6 4.1-3.6-1.6-3.6-4.1 1.5-4.1 3.6-4.1z" />
      {/* 'n' */}
      <path d="M86.5 15.6c-1.3 0-2.3.5-3 1.4v-1.1h-3.3v11.8h3.4v-5.8c0-2 1.3-3.3 3.1-3.3 1.8 0 2.8 1.1 2.8 3.1v6h3.4v-6.6c0-3.5-2.1-5.5-4.9-5.5z" />
      {/* 'b' */}
      <path d="M99.8 10.8h-3.4v16.9h3.4v-1.8c.9 1.2 2.2 2 4 2 3.7 0 6.3-2.9 6.3-6.8s-2.6-6.8-6.3-6.8c-1.8 0-3.1.8-4 2zm2.2 7.6c2.1 0 3.6 1.6 3.6 4.1s-1.5 4.1-3.6 4.1-3.6-1.6-3.6-4.1 1.5-4.1 3.6-4.1z" />
    </svg>
  );
};

// Star icon
export const StarIcon = ({ size = 12, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.483-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.124-8.885a1 1 0 0 0-1.817 0z" />
  </svg>
);

// Share icon
export const ShareIcon = ({ size = 16, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth={2}>
    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
    <path d="M22 11l-6-6-6 6" />
    <path d="M16 5v16" />
  </svg>
);

// Heart icon
export const HeartIcon = ({ size = 16, color = "#222222", filled = false }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={filled ? color : "none"} stroke={color} strokeWidth={2}>
    <path d="M16 28c7-4.733 14-10 14-17a6 6 0 0 0-6-6c-2 0-4 1-5 2h-1a5.97 5.97 0 0 0-5-2 6 6 0 0 0-6 6c0 7 7 12.267 14 17z" />
  </svg>
);

// Arrow icon
export const ArrowIcon = ({ size = 12, color = "#222222", direction = "right" }: IconProps & { direction?: "left" | "right" | "up" | "down" }) => {
  const rotations = { right: 0, down: 90, left: 180, up: 270 };
  return (
    <svg viewBox="0 0 18 18" width={size} height={size} fill={color} style={{ transform: `rotate(${rotations[direction]}deg)` }}>
      <path d="M4.29 1.71a1 1 0 0 0 0 1.42L10.17 9l-5.88 5.87a1 1 0 1 0 1.42 1.42l6.59-6.59a1 1 0 0 0 0-1.42L5.71 1.71a1 1 0 0 0-1.42 0z" />
    </svg>
  );
};

// Close icon
export const CloseIcon = ({ size = 16, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M6 6l20 20M26 6L6 26" stroke={color} strokeWidth={3} strokeLinecap="round" fill="none" />
  </svg>
);

// Official Airbnb Globe icon (Screenshot 2)
export const GlobeIcon = ({ size = 16, color = "#222222" }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="1.2"
    style={{ color, display: "block" }}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.2" />
    <ellipse cx="8" cy="8" rx="3.5" ry="7.2" />
    <line x1="0.8" y1="8" x2="15.2" y2="8" />
  </svg>
);

// Hamburger menu icon (3 clean lines matching screenshot 1)
export const HamburgerMenuIcon = ({ size = 18, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
    <line x1="3.5" y1="6" x2="20.5" y2="6" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
    <line x1="3.5" y1="18" x2="20.5" y2="18" />
  </svg>
);

// ==========================================
// AMENITY ICONS (Matching Airbnb Screenshots 3, 4, 5)
// ==========================================

// Hairdryer (Screenshot 3)
export const HairdryerIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6h9a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-9a6 6 0 0 1-6-6v-1a4 4 0 0 1 6-4z" />
    <path d="M25 9h2v5h-2" />
    <path d="M11 17l-3 9h4l2.5-9" />
    <path d="M9.5 26c0 1.5 1.5 2 2.5 2s2-.5 2-2" />
  </svg>
);

// Cleaning products / Spray bottle (Screenshot 3)
export const CleaningProductsIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 14h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" />
    <path d="M15 14V8h-2" />
    <path d="M13 4h6v4h-6z" />
    <path d="M13 6H8v2" />
    <path d="M13 9l-3 3" />
  </svg>
);

// Shampoo (Screenshot 3)
export const ShampooIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="10" width="14" height="17" rx="2" />
    <path d="M12 10V6h8v4" />
    <line x1="13" y1="4" x2="19" y2="4" />
    <line x1="9" y1="16" x2="23" y2="16" />
  </svg>
);

// Hot water (Screenshot 3)
export const HotWaterIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 17h24v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-4z" />
    <path d="M9 7c-1 2 1 3 0 5" />
    <path d="M16 5c-1 2 1 3 0 5" />
    <path d="M23 7c-1 2 1 3 0 5" />
  </svg>
);

// Shower gel (Screenshot 3)
export const ShowerGelIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="11" width="12" height="16" rx="2" />
    <path d="M13 11V6h-4" />
    <path d="M11 6h4" />
    <circle cx="24" cy="13" r="1.5" fill={color} />
    <circle cx="27" cy="17" r="1" fill={color} />
    <circle cx="24" cy="21" r="1.5" fill={color} />
  </svg>
);

// Washing machine (Screenshot 4)
export const WashingMachineIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="4" width="22" height="24" rx="3" />
    <circle cx="16" cy="17" r="6" />
    <path d="M13 19a4 4 0 0 1 6-4" />
    <circle cx="9" cy="8" r="1" fill={color} />
    <circle cx="13" cy="8" r="1" fill={color} />
  </svg>
);

// Hangers (Screenshot 4)
export const HangersIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 9a3 3 0 1 0-3-3" />
    <path d="M16 9l-11 9a2 2 0 0 0 1 3h20a2 2 0 0 0 1-3L16 9z" />
  </svg>
);

// Bed linen (Screenshot 4)
export const BedLinenIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V10z" />
    <path d="M7 16h12a4 4 0 0 1 4 4" />
    <path d="M7 21h16" />
  </svg>
);

// Room-darkening blinds (Screenshot 4)
export const BlindsIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="28" y2="6" />
    <path d="M6 6v12h20V6" />
    <line x1="16" y1="18" x2="16" y2="24" />
    <circle cx="16" cy="25" r="1.5" fill={color} />
  </svg>
);

// Iron (Screenshot 4)
export const IronIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h24c0-6-4-10-10-10H6a2 2 0 0 0-2 2v8z" />
    <path d="M6 12V8h12v4" />
    <circle cx="9" cy="26" r="1" fill={color} />
    <circle cx="15" cy="26" r="1" fill={color} />
    <circle cx="21" cy="26" r="1" fill={color} />
  </svg>
);

// Clothes storage / Wardrobe (Screenshot 4)
export const ClothesStorageIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="20" height="21" rx="2" />
    <line x1="16" y1="4" x2="16" y2="25" />
    <line x1="13" y1="13" x2="13" y2="16" />
    <line x1="19" y1="13" x2="19" y2="16" />
    <line x1="9" y1="25" x2="9" y2="28" />
    <line x1="23" y1="25" x2="23" y2="28" />
  </svg>
);

// Cot / Crib (Screenshot 4 & 5)
export const CotIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="24" height="12" rx="1" />
    <line x1="4" y1="6" x2="4" y2="26" />
    <line x1="28" y1="6" x2="28" y2="26" />
    <line x1="9" y1="10" x2="9" y2="22" />
    <line x1="14" y1="10" x2="14" y2="22" />
    <line x1="18" y1="10" x2="18" y2="22" />
    <line x1="23" y1="10" x2="23" y2="22" />
  </svg>
);

// TV (Screenshot 5)
export const TVIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="24" height="16" rx="2" />
    <line x1="10" y1="26" x2="22" y2="26" />
    <line x1="16" y1="22" x2="16" y2="26" />
  </svg>
);

// Air conditioning / Snowflake (Screenshot 5)
export const ACIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16" y1="3" x2="16" y2="29" />
    <line x1="4.7" y1="9.5" x2="27.3" y2="22.5" />
    <line x1="4.7" y1="22.5" x2="27.3" y2="9.5" />
    <path d="M13 6l3-3 3 3" />
    <path d="M13 26l3 3 3-3" />
    <path d="M7 13l-2.3-3.5 4-1" />
    <path d="M25 19l2.3 3.5-4 1" />
    <path d="M9 24.5l-4.3-2 1-4" />
    <path d="M23 7.5l4.3 2-1 4" />
  </svg>
);

// Ceiling fan (Screenshot 5)
export const CeilingFanIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="3" />
    <path d="M16 13C16 8 20 5 22 5s0 8-3 8" />
    <path d="M19 16c5 0 8 4 8 6s-8 0-8-3" />
    <path d="M16 19c0 5-4 8-6 8s0-8 3-8" />
    <path d="M13 16c-5 0-8-4-8-6s8 0 8 3" />
  </svg>
);

// Exterior security cameras on property (Screenshot 5)
export const SecurityCameraIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14v8" />
    <path d="M4 18h6" />
    <path d="M10 12h14l4 4-4 4H10l-2-4 2-4z" />
    <circle cx="20" cy="16" r="2" fill={color} />
  </svg>
);

// Carbon monoxide alarm (crossed out - Screenshot 5)
export const COAlarmIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="22" height="22" rx="3" />
    <line x1="4" y1="28" x2="28" y2="4" />
    <circle cx="16" cy="16" r="4" />
  </svg>
);

// Wifi icon
export const WifiIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M3 10c7.2-6.7 18.8-6.7 26 0" />
    <path d="M7 15c5-4.7 13-4.7 18 0" />
    <path d="M11 20c2.8-2.7 7.2-2.7 10 0" />
    <circle cx="16" cy="25" r="1.5" fill={color} />
  </svg>
);

// Kitchen icon
export const KitchenIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4v24M26 4v24M6 14h20M6 4h20M12 4v10M20 4v10" />
    <circle cx="11" cy="20" r="1.5" fill={color} />
    <circle cx="21" cy="20" r="1.5" fill={color} />
  </svg>
);

// Refrigerator icon
export const FridgeIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="4" width="18" height="24" rx="2" />
    <line x1="7" y1="14" x2="25" y2="14" />
    <line x1="10" y1="8" x2="10" y2="11" />
    <line x1="10" y1="17" x2="10" y2="21" />
  </svg>
);

// Microwave icon
export const MicrowaveIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="24" height="20" rx="2" />
    <rect x="7" y="9" width="12" height="14" rx="1" />
    <line x1="23" y1="10" x2="23" y2="13" />
    <line x1="23" y1="16" x2="23" y2="19" />
  </svg>
);

// Dishes icon
export const DishesIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="10" />
    <circle cx="16" cy="16" r="6" />
    <line x1="3" y1="10" x2="3" y2="22" />
    <line x1="29" y1="10" x2="29" y2="22" />
  </svg>
);

// Kettle icon
export const KettleIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12h14l2 12H6l2-12z" />
    <path d="M11 12V7a4 4 0 0 1 8 0v5" />
    <path d="M22 14h4v6h-3" />
    <line x1="5" y1="26" x2="25" y2="26" />
  </svg>
);

// Parking icon
export const ParkingIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="13" />
    <path d="M13 22V10h5a3.5 3.5 0 0 1 0 7h-5" />
  </svg>
);

// Pool icon
export const PoolIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22c3 0 4-2 7-2s4 2 7 2 4-2 7-2" />
    <path d="M4 27c3 0 4-2 7-2s4 2 7 2 4-2 7-2" />
    <path d="M12 6v10M18 6v10M12 10h6M12 14h6" />
  </svg>
);

// Hot tub / Jacuzzi icon
export const JacuzziIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18h24v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-4z" />
    <path d="M9 10c0-2 2-3 2-5" />
    <path d="M16 10c0-2 2-3 2-5" />
    <path d="M23 10c0-2 2-3 2-5" />
  </svg>
);

// Pets icon
export const PetsIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="16" cy="20" rx="6" ry="5" />
    <circle cx="10" cy="11" r="2.5" />
    <circle cx="16" cy="9" r="2.5" />
    <circle cx="22" cy="11" r="2.5" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="25" cy="17" r="2" />
  </svg>
);

// Workspace icon
export const WorkspaceIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="24" height="14" rx="2" />
    <line x1="16" y1="20" x2="16" y2="25" />
    <line x1="10" y1="25" x2="22" y2="25" />
  </svg>
);

// Gym icon
export const GymIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 11v10M10 8v16M22 8v16M26 11v10M6 16h20" />
  </svg>
);

// Balcony / Patio icon
export const BalconyIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14h24v12H4z" />
    <line x1="10" y1="14" x2="10" y2="26" />
    <line x1="16" y1="14" x2="16" y2="26" />
    <line x1="22" y1="14" x2="22" y2="26" />
    <path d="M8 14V6h16v8" />
  </svg>
);

// Fire extinguisher icon
export const FireExtinguisherIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="11" width="12" height="16" rx="3" />
    <path d="M16 11V6M13 6h6M16 6l6 3v8" />
  </svg>
);

// First aid kit icon
export const FirstAidIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="24" height="18" rx="3" />
    <path d="M11 8V5h10v3" />
    <line x1="16" y1="13" x2="16" y2="21" />
    <line x1="12" y1="17" x2="20" y2="17" />
  </svg>
);

// Mountain view icon (unavailable)
export const MountainIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l8-14 6 10 4-6 6 10H4z" />
  </svg>
);

// Location Pin
export const LocationPinIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3a9 9 0 0 0-9 9c0 7 9 17 9 17s9-10 9-17a9 9 0 0 0-9-9z" />
    <circle cx="16" cy="12" r="3" />
  </svg>
);

// Check-in Lockbox
export const CheckInIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="12" width="20" height="16" rx="3" />
    <path d="M11 12V8a5 5 0 0 1 10 0v4" />
    <circle cx="16" cy="19" r="2" />
  </svg>
);

// Superhost
export const SuperhostIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="13" />
    <path d="M16 6l3 6 6.5 1-4.75 4.5 1 6.5L16 21l-5.75 3 1-6.5L6.5 13 13 12z" />
  </svg>
);

// Calendar
export const CalendarIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="24" height="22" rx="2" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <line x1="9" y1="3" x2="9" y2="7" />
    <line x1="23" y1="3" x2="23" y2="7" />
  </svg>
);

// Flat 2D Laurel Branch for Overview Badge
export const LaurelBranchFlat = ({ size = 32, color = "#222222", flip = false }: { size?: number; color?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 24 38"
    width={size * (24 / 38)}
    height={size}
    fill={color}
    style={{
      transform: flip ? "scaleX(-1)" : "none",
      transformOrigin: "center",
      display: "inline-block",
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    <path
      d="M17 35.5c-3.2 0-5.5-2-5.5-4.8 0-2.3 1.8-4.2 4.2-4.2 2 0 3.6 1.5 3.6 3.5 0 1.7-1.3 3-3 3-1.4 0-2.4-1-2.4-2.2 0-1 .7-1.8 1.7-1.8.8 0 1.3.5 1.3 1.2 0 .5-.3.8-.8.8"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11.5 30.7C7.5 25.5 6 18.5 14 3.5"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M10.8 30c-4-0.8-7-3.6-7.5-7.5 3.2 0.5 6.2 3 7.5 7.5z" />
    <path d="M9.5 24c-4.2-1.8-6.5-5.5-6.2-10 3.5 1.4 6 5.2 6.2 10z" />
    <path d="M10 17.5c-3.2-2.8-4.5-6.8-3.2-11 3.2 2 4.8 6 4.4 11z" />
    <path d="M12.5 21.5c2.5-3 6.2-4.5 10-3.8-1.8 3.5-5 5.5-10 3.8z" />
    <path d="M13.2 14.5c2.6-2.5 6-3.5 9.5-2.5-2 3-5 4.2-9.5 2.5z" />
    <path d="M14 3.5C13.2 1 15.2-0.2 17-0.1c.1 2.2-1.2 3.6-3 3.6z" />
  </svg>
);

// 3D Shaded Laurel Branch for Reviews 4.95 Hero
export const LaurelBranch3D = ({ size = 96, flip = false }: { size?: number; flip?: boolean }) => {
  const prefix = flip ? "r" : "l";
  return (
    <svg
      viewBox="0 0 42 100"
      width={size * (42 / 100)}
      height={size}
      style={{
        transform: flip ? "scaleX(-1)" : "none",
        transformOrigin: "center",
        display: "inline-block",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${prefix}_leaf_light`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#69737d" />
          <stop offset="50%" stopColor="#4a525b" />
          <stop offset="100%" stopColor="#2c3238" />
        </linearGradient>
        <linearGradient id={`${prefix}_leaf_dark`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32383f" />
          <stop offset="50%" stopColor="#1f2328" />
          <stop offset="100%" stopColor="#121518" />
        </linearGradient>
        <linearGradient id={`${prefix}_stem`} x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#22262a" />
          <stop offset="50%" stopColor="#3d444c" />
          <stop offset="100%" stopColor="#1e2226" />
        </linearGradient>
      </defs>
      <path
        d="M28 89c-5.5 0-9.5-3.8-9.5-8.5 0-4.2 3.2-7.5 7.5-7.5 3.8 0 6.5 2.8 6.5 6.2 0 3-2.4 5.2-5.2 5.2-2.4 0-4-1.8-4-3.8 0-1.8 1.3-3.2 3-3.2 1.4 0 2.2.9 2.2 2 0 .8-.5 1.5-1.4 1.5"
        fill="none"
        stroke={`url(#${prefix}_stem)`}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M18.5 80.5C12 70 9.5 54 23 11"
        fill="none"
        stroke={`url(#${prefix}_stem)`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <g>
        <path d="M18 78c-7-1.5-12.5-6.5-13.5-13.5 1.8.8 7.5 5 13.5 13.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M4.5 64.5c5.5 0 10.5 4.5 13.5 13.5-1.8-4.5-6.5-10.5-13.5-13.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M15.5 64C8 60.5 3.5 53 4 45c3.2 2.5 8 8 11.5 19z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M4 45c6 2.5 10 9.5 11.5 19-3-6-7.5-14-11.5-19z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M16.5 49c-6-5.5-8.5-13.5-6-21.5 3.5 3.5 7.5 11 6 21.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M10.5 27.5c5.5 4 8 12.5 6 21.5-1-8-3-15-6-21.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M20 57.5c4.5-5.5 11.5-8 18.5-7-3.5 6-9.5 9.5-18.5 7z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M38.5 50.5c-4 5-9.5 8-18.5 7 6-2 13-4 18.5-7z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M21.5 41c5-4.5 11.5-6.5 18-4.8-4 5.5-10 7.8-18 4.8z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M39.5 36.2c-4 4.5-9.5 6.8-18 4.8 6-2 12.5-3 18-4.8z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M22.5 25.5c4-3.5 9.5-5 15-3.5-3.2 4.2-8 6-15 3.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M37.5 22c-3.2 3.5-7.5 5-15 3.5 5-1.5 10.5-2.2 15-3.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
      <g>
        <path d="M23 11c-1.5-4.5 2-7.5 5-7.5.5 4-2 6.5-5 7.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M28 3.5c-1 3.8-3 6-5 7.5 2-1 4-4 5-7.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
    </svg>
  );
};

// Main Amenity Icon Mapper matching screenshots 3, 4, 5
export const AmenityIcon = ({
  iconType,
  size = 24,
  color = "#222222",
}: {
  iconType: string;
  size?: number;
  color?: string;
}) => {
  const props = { size, color };
  switch (iconType) {
    // Bathroom
    case "HAIR_DRYER":
    case "HAIRDRYER":
      return <HairdryerIcon {...props} />;
    case "CLEANING":
      return <CleaningProductsIcon {...props} />;
    case "SHAMPOO":
    case "CONDITIONER":
      return <ShampooIcon {...props} />;
    case "HOT_WATER":
      return <HotWaterIcon {...props} />;
    case "SHOWER_GEL":
    case "SOAP":
      return <ShowerGelIcon {...props} />;

    // Bedroom & laundry
    case "WASHER":
    case "WASHING_MACHINE":
    case "DRYER":
      return <WashingMachineIcon {...props} />;
    case "HANGERS":
      return <HangersIcon {...props} />;
    case "BED_LINEN":
    case "LINENS":
    case "PILLOWS":
    case "ESSENTIALS":
      return <BedLinenIcon {...props} />;
    case "BLINDS":
      return <BlindsIcon {...props} />;
    case "IRON":
      return <IronIcon {...props} />;
    case "CLOTHES_STORAGE":
    case "WARDROBE":
      return <ClothesStorageIcon {...props} />;
    case "COT":
    case "CRIB":
    case "HIGH_CHAIR":
      return <CotIcon {...props} />;

    // Entertainment & Office
    case "TV":
      return <TVIcon {...props} />;
    case "WIFI":
      return <WifiIcon {...props} />;
    case "WORKSPACE":
      return <WorkspaceIcon {...props} />;

    // Heating & Cooling
    case "AC":
      return <ACIcon {...props} />;
    case "FAN":
      return <CeilingFanIcon {...props} />;

    // Safety
    case "SURVEILLANCE":
      return <SecurityCameraIcon {...props} />;
    case "CO_ALARM":
    case "SMOKE_ALARM":
      return <COAlarmIcon {...props} />;
    case "FIRE_EXTINGUISHER":
      return <FireExtinguisherIcon {...props} />;
    case "FIRST_AID":
      return <FirstAidIcon {...props} />;

    // Kitchen
    case "COOKING":
    case "COOKING_BASICS":
    case "RICE":
      return <KitchenIcon {...props} />;
    case "FRIDGE":
    case "FREEZER":
      return <FridgeIcon {...props} />;
    case "MICROWAVE":
      return <MicrowaveIcon {...props} />;
    case "DISHES":
      return <DishesIcon {...props} />;
    case "KETTLE":
      return <KettleIcon {...props} />;

    // Outdoor & Facilities
    case "PARKING":
      return <ParkingIcon {...props} />;
    case "POOL":
      return <PoolIcon {...props} />;
    case "JACUZZI":
      return <JacuzziIcon {...props} />;
    case "PETS":
      return <PetsIcon {...props} />;
    case "BALCONY":
      return <BalconyIcon {...props} />;
    case "GYM":
      return <GymIcon {...props} />;
    case "MOUNTAIN":
      return <MountainIcon {...props} />;

    // Services
    case "LOCK_BOX":
    case "CHECKIN":
      return <CheckInIcon {...props} />;
    case "LOCATION":
      return <LocationPinIcon {...props} />;
    case "HOST":
      return <SuperhostIcon {...props} />;
    case "CANCELLATION":
      return <CalendarIcon {...props} />;

    default:
      return <CheckInIcon {...props} />;
  }
};
