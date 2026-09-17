"use client";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Airbnb logo
export const AirbnbLogo = ({ size = 32, color = "#FF385C" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color} aria-label="Airbnb">
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179-.172.178-.257.261c-2.153 2.13-4.485 3.386-6.709 3.386-3.480 0-6.357-2.416-6.357-6.478l.001-.228.010-.415c.05-.924.293-1.805.960-3.396l.145-.353c.982-2.288 5.067-10.876 7.049-14.697l.1-.193.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33-.001.228c0 2.786 1.787 4.478 4.357 4.478 1.720 0 3.681-1.115 5.616-3.026l.537-.544.796-.851.796.85.538.545c1.935 1.911 3.896 3.026 5.616 3.026 2.57 0 4.357-1.692 4.357-4.478l-.001-.228-.009-.33c-.032-.585-.178-1.169-.605-2.24l-.345-.836C23.762 18.635 19.748 10.217 17.51 6.218l-.523-1.008C16.053 3.539 15.239 3 16 3zm0 4.15c.642 0 1.073.405 1.544 1.414l.141.294.473.991c.868 1.843 3.404 7.232 4.748 10.195l.333.727.195.428.098.218.019.043.07.156.088.201.055.131.089.22.022.055a2.98 2.98 0 0 1 .162.762l.008.214.001.113c0 1.97-1.289 3.157-3.045 3.157-1.323 0-2.78-.781-4.245-2.098l-.344-.314-.436-.41-.434.41-.344.314c-1.465 1.317-2.922 2.098-4.245 2.098-1.756 0-3.045-1.187-3.045-3.157l.001-.113.008-.214a2.98 2.98 0 0 1 .162-.762l.022-.055.089-.22.055-.131.088-.201.07-.156.019-.043.098-.218.195-.428.333-.727C11.2 17.08 13.617 11.943 14.793 9.504l.473-.991.141-.294C15.927 7.555 16.358 7.15 16 7.15z" />
  </svg>
);

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

// Wifi icon  
export const WifiIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M31 9a1 1 0 0 1-.707-.293C26.616 5.03 21.462 3 16 3s-10.616 2.03-14.293 5.707A1 1 0 0 1 .29 7.29C4.269 3.311 9.893 1 16 1s11.731 2.311 15.71 6.29A1 1 0 0 1 31 9zM25.607 14.393a1 1 0 0 1-.707-.293A13.453 13.453 0 0 0 16 10.5c-3.635 0-7.049 1.414-9.607 3.979a1 1 0 1 1-1.407-1.421A15.448 15.448 0 0 1 16 8.5c4.136 0 8.023 1.61 10.95 4.535a1 1 0 0 1-.707 1.707l-.636-.35zm-5.485 5.072a1 1 0 0 1-.707-.293A7.468 7.468 0 0 0 16 17a7.47 7.47 0 0 0-5.293 2.172 1 1 0 0 1-1.414-1.414A9.466 9.466 0 0 1 16 15a9.466 9.466 0 0 1 6.707 2.758 1 1 0 0 1-.707 1.707l.122-.001zM16 28a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

// Kitchen icon
export const KitchenIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M10 2a2 2 0 0 0-2 2v8H6V4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8h-2V4a2 2 0 0 0-2-2H10zm-4 10h20v2H6v-2zm16 4v12h-2V16h2zM8 16h2v12H8V16zm4 0h8v4a4 4 0 0 1-8 0v-4z" />
  </svg>
);

// Parking icon
export const ParkingIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M13 16h3a3 3 0 0 0 0-6h-3v6zm0 2v8h-2V8h5a5 5 0 0 1 0 10h-3z" />
    <path fillRule="evenodd" d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm0-2C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z" />
  </svg>
);

// Pool icon
export const PoolIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M0 24.5a1 1 0 0 1 1-1c2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 1 0 1 2 0 2-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1c2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 2.517 0 3.786 1 5.5 1 1.714 0 2.983-1 5.5-1 1 0 1 2 0 2-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1-2.517 0-3.786-1-5.5-1-1.714 0-2.983 1-5.5 1a1 1 0 0 1-1-1zm14-16v-7a2 2 0 0 0-2-2h-2V2h2a4 4 0 0 1 4 4v11.5l-2-.5zM24 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 13.5V8a6 6 0 0 1 6-6h6v2h-6a4 4 0 0 0-4 4v5.5l-2 .5z" />
  </svg>
);

// Hot tub/Jacuzzi icon
export const JacuzziIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M3.414 18.172l7.071-7.071a1 1 0 0 1 1.415 1.414l-7.072 7.07a1 1 0 0 1-1.414-1.413zm9.899-9.9l7.07-7.07a1 1 0 0 1 1.415 1.414l-7.071 7.07a1 1 0 0 1-1.414-1.413zm-9.9 9.9L0 21.586V28h32v-6.414l-3.413-3.414A2 2 0 0 0 27.172 18H4.828a2 2 0 0 0-1.414.586zM2 30v-8l2.828-2.828A4 4 0 0 1 7.657 18h16.686a4 4 0 0 1 2.829 1.172L30 22v8H2z" />
  </svg>
);

// Pets icon
export const PetsIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M13.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm5 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-13 5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm21 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 12c-5 0-9 4-9 9 0 3 1.5 5.5 5 7a13.6 13.6 0 0 0 8 0c3.5-1.5 5-4 5-7 0-5-4-9-9-9z" />
  </svg>
);

// Camera/Security icon
export const CameraIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12.243 5l-1.414-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H21.17L19.757 5H12.243zM2 7h28v18H2V7z" />
  </svg>
);

// CO alarm icon
export const COAlarmIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zM0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm15 0a1 1 0 1 0 2 0V8a1 1 0 1 0-2 0v8zm1 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

// Workspace icon  
export const WorkspaceIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M4 2h24a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-9v4h4v2H9v-2h4v-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h24V4H4z" />
  </svg>
);

// TV icon
export const TVIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M4 8h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm0 2v14h24V10H4zm4-6l3 4H9L6 4h2zm8 0l3 4h-2l-3-4h2zm8 0l3 4h-2l-3-4h2z" />
  </svg>
);

// Air conditioner icon
export const ACIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M15 3v7.268l-4.243-4.243-1.414 1.414L15 13.1V17h-3.9l-5.657-5.657-1.414 1.414L9.268 17H2v2h7.268l-4.243 4.243 1.414 1.414L11 20.1V24h2v-4l4.9 4.9 1.414-1.414L15 19.9V17h3.9l5.657 5.657 1.414-1.414L21.732 17H30v-2h-8.268l4.243-4.243-1.414-1.414L20 13.9V10h-2v3.268l-4.243-4.243L12.343 10.44 15 13.1V3h-2z" />
  </svg>
);

// Location pin icon
export const LocationPinIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 2C11.582 2 8 5.582 8 10c0 5.25 6.917 13.604 7.219 13.958a1 1 0 0 0 1.562 0C17.083 23.604 24 15.25 24 10c0-4.418-3.582-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

// Check-in icon
export const CheckInIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M26 2H8a2 2 0 0 0-2 2v6h2V4h18v24H8v-6H6v6a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14.586 21.586l-1.414-1.414L17.757 16H4v-2h13.757l-4.585-4.172 1.414-1.414L21 15.172a1 1 0 0 1 0 1.656z" />
  </svg>
);

// Superhost icon
export const SuperhostIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 0a16 16 0 1 1 0 32A16 16 0 0 1 16 0zm0 2a14 14 0 1 0 0 28A14 14 0 0 0 16 2zm0 4l3 6 6.5 1-4.75 4.5 1 6.5L16 21l-5.75 3 1-6.5L6.5 13 13 12z" />
  </svg>
);

// Calendar icon
export const CalendarIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M11 3v2H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V3h-2v2h-6V3h-2zm-3 6h16v14H8V9z" />
  </svg>
);

// Menu/hamburger icon (3 crisp lines matching reference)
export const MenuIcon = ({ size = 16, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill={color}>
    <path d="M1 2.5h14v1.8H1zm0 4.6h14v1.8H1zm0 4.6h14v1.8H1z" />
  </svg>
);

export const HamburgerMenuIcon = ({ size = 18, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
    <line x1="3.5" y1="6" x2="20.5" y2="6" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
    <line x1="3.5" y1="18" x2="20.5" y2="18" />
  </svg>
);

// Flat 2D Laurel Branch for Overview Badge (Screenshot 2)
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
    {/* Base spiral loop */}
    <path
      d="M17 35.5c-3.2 0-5.5-2-5.5-4.8 0-2.3 1.8-4.2 4.2-4.2 2 0 3.6 1.5 3.6 3.5 0 1.7-1.3 3-3 3-1.4 0-2.4-1-2.4-2.2 0-1 .7-1.8 1.7-1.8.8 0 1.3.5 1.3 1.2 0 .5-.3.8-.8.8"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Stem */}
    <path
      d="M11.5 30.7C7.5 25.5 6 18.5 14 3.5"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Leaf 1 (bottom left) */}
    <path d="M10.8 30c-4-0.8-7-3.6-7.5-7.5 3.2 0.5 6.2 3 7.5 7.5z" />
    {/* Leaf 2 (mid-lower left) */}
    <path d="M9.5 24c-4.2-1.8-6.5-5.5-6.2-10 3.5 1.4 6 5.2 6.2 10z" />
    {/* Leaf 3 (mid left) */}
    <path d="M10 17.5c-3.2-2.8-4.5-6.8-3.2-11 3.2 2 4.8 6 4.4 11z" />
    {/* Leaf 4 (mid right) */}
    <path d="M12.5 21.5c2.5-3 6.2-4.5 10-3.8-1.8 3.5-5 5.5-10 3.8z" />
    {/* Leaf 5 (upper right) */}
    <path d="M13.2 14.5c2.6-2.5 6-3.5 9.5-2.5-2 3-5 4.2-9.5 2.5z" />
    {/* Leaf 6 (tip) */}
    <path d="M14 3.5C13.2 1 15.2-0.2 17-0.1c.1 2.2-1.2 3.6-3 3.6z" />
  </svg>
);

// 3D Shaded Laurel Branch for Reviews 4.95 Hero (Screenshot 3)
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
        {/* Light facet gradient */}
        <linearGradient id={`${prefix}_leaf_light`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#69737d" />
          <stop offset="50%" stopColor="#4a525b" />
          <stop offset="100%" stopColor="#2c3238" />
        </linearGradient>
        {/* Dark facet gradient */}
        <linearGradient id={`${prefix}_leaf_dark`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32383f" />
          <stop offset="50%" stopColor="#1f2328" />
          <stop offset="100%" stopColor="#121518" />
        </linearGradient>
        {/* Stem gradient */}
        <linearGradient id={`${prefix}_stem`} x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#22262a" />
          <stop offset="50%" stopColor="#3d444c" />
          <stop offset="100%" stopColor="#1e2226" />
        </linearGradient>
      </defs>

      {/* Base stem spiral loop */}
      <path
        d="M28 89c-5.5 0-9.5-3.8-9.5-8.5 0-4.2 3.2-7.5 7.5-7.5 3.8 0 6.5 2.8 6.5 6.2 0 3-2.4 5.2-5.2 5.2-2.4 0-4-1.8-4-3.8 0-1.8 1.3-3.2 3-3.2 1.4 0 2.2.9 2.2 2 0 .8-.5 1.5-1.4 1.5"
        fill="none"
        stroke={`url(#${prefix}_stem)`}
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Main curved stem */}
      <path
        d="M18.5 80.5C12 70 9.5 54 23 11"
        fill="none"
        stroke={`url(#${prefix}_stem)`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Leaf 1 (Bottom outer): 2 faceted halves */}
      <g>
        <path d="M18 78c-7-1.5-12.5-6.5-13.5-13.5 1.8.8 7.5 5 13.5 13.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M4.5 64.5c5.5 0 10.5 4.5 13.5 13.5-1.8-4.5-6.5-10.5-13.5-13.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 2 (Mid-lower outer) */}
      <g>
        <path d="M15.5 64C8 60.5 3.5 53 4 45c3.2 2.5 8 8 11.5 19z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M4 45c6 2.5 10 9.5 11.5 19-3-6-7.5-14-11.5-19z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 3 (Mid outer) */}
      <g>
        <path d="M16.5 49c-6-5.5-8.5-13.5-6-21.5 3.5 3.5 7.5 11 6 21.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M10.5 27.5c5.5 4 8 12.5 6 21.5-1-8-3-15-6-21.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 4 (Mid-lower inner) */}
      <g>
        <path d="M20 57.5c4.5-5.5 11.5-8 18.5-7-3.5 6-9.5 9.5-18.5 7z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M38.5 50.5c-4 5-9.5 8-18.5 7 6-2 13-4 18.5-7z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 5 (Mid-upper inner) */}
      <g>
        <path d="M21.5 41c5-4.5 11.5-6.5 18-4.8-4 5.5-10 7.8-18 4.8z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M39.5 36.2c-4 4.5-9.5 6.8-18 4.8 6-2 12.5-3 18-4.8z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 6 (Upper inner) */}
      <g>
        <path d="M22.5 25.5c4-3.5 9.5-5 15-3.5-3.2 4.2-8 6-15 3.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M37.5 22c-3.2 3.5-7.5 5-15 3.5 5-1.5 10.5-2.2 15-3.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>

      {/* Leaf 7 (Top tip crown) */}
      <g>
        <path d="M23 11c-1.5-4.5 2-7.5 5-7.5.5 4-2 6.5-5 7.5z" fill={`url(#${prefix}_leaf_light)`} />
        <path d="M28 3.5c-1 3.8-3 6-5 7.5 2-1 4-4 5-7.5z" fill={`url(#${prefix}_leaf_dark)`} />
      </g>
    </svg>
  );
};

// User circle icon
export const UserIcon = ({ size = 24, color = "#717171" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28a12.24 12.24 0 0 1-7.4-2.46 8.37 8.37 0 0 1 14.8 0A12.24 12.24 0 0 1 16 28.7zm9.06-4.5a10.38 10.38 0 0 0-18.12 0A12.3 12.3 0 0 1 3.7 16 12.3 12.3 0 0 1 16 3.7 12.3 12.3 0 0 1 28.3 16a12.3 12.3 0 0 1-3.24 8.2zM16 8a5 5 0 1 0 0 10A5 5 0 0 0 16 8zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

// Official Airbnb Globe icon
export const GlobeIcon = ({ size = 16, color = "#222222" }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="currentColor"
    style={{ color, display: "block" }}
    aria-hidden="true"
  >
    <path d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8zm5.918 7H9.98a13.3 13.3 0 0 0-.825-4.542A6.52 6.52 0 0 1 13.918 7zM8 1.528A11.75 11.75 0 0 1 9.406 7H6.594A11.75 11.75 0 0 1 8 1.528zM1.528 8c0-.342.025-.678.072-1h3.97a13.3 13.3 0 0 0 .825-4.542A6.52 6.52 0 0 0 2.082 7H1.528zm.072 2h3.97a13.3 13.3 0 0 0 .825 4.542A6.52 6.52 0 0 1 2.082 9h-.482zm4.994 0h2.812A11.75 11.75 0 0 1 8 14.472 11.75 11.75 0 0 1 6.594 10zm2.561 4.542A13.3 13.3 0 0 0 9.98 10h3.938a6.52 6.52 0 0 1-4.763 4.542zM14.472 9h-3.938a11.75 11.75 0 0 0 .428-2h3.51a6.47 6.47 0 0 1 0 2z" />
  </svg>
);

// Bed icon
export const BedIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M26 12H6v-4a2 2 0 0 0-2-2H2V4H0v24h2v-6h28v6h2V18a6 6 0 0 0-6-6zm4 4v2H2v-2h28zm-24-4h20a4 4 0 0 1 4 4H2v-4a1 1 0 0 1 0-1v4a1 1 0 0 0 4 0v-3z" />
  </svg>
);

// Gym icon
export const GymIcon = ({ size = 24, color = "#222222" }: IconProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M25 6a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1V8a2 2 0 0 1 2-2h18zM4 13H2v6h2v-6zm26 0h-2v6h2v-6zM25 8H7v16h18V8zm-7 3v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" />
  </svg>
);

// Amenity icon mapper
export const AmenityIcon = ({ iconType, size = 24, color = "#222222" }: { iconType: string; size?: number; color?: string }) => {
  const props = { size, color };
  switch (iconType) {
    case "WIFI": return <WifiIcon {...props} />;
    case "COOKING": return <KitchenIcon {...props} />;
    case "COOKING_BASICS": return <KitchenIcon {...props} />;
    case "PARKING": return <ParkingIcon {...props} />;
    case "POOL": return <PoolIcon {...props} />;
    case "JACUZZI": return <JacuzziIcon {...props} />;
    case "PETS": return <PetsIcon {...props} />;
    case "SURVEILLANCE": return <CameraIcon {...props} />;
    case "CO_ALARM": return <COAlarmIcon {...props} />;
    case "SMOKE_ALARM": return <COAlarmIcon {...props} />;
    case "WORKSPACE": return <WorkspaceIcon {...props} />;
    case "TV": return <TVIcon {...props} />;
    case "AC": return <ACIcon {...props} />;
    case "GYM": return <GymIcon {...props} />;
    case "LOCATION": return <LocationPinIcon {...props} />;
    case "CHECKIN": return <CheckInIcon {...props} />;
    case "HOST": return <SuperhostIcon {...props} />;
    case "CANCELLATION": return <CalendarIcon {...props} />;
    default: return <div style={{ width: size, height: size, background: "#ddd", borderRadius: 4 }} />;
  }
};
