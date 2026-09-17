type IconProps = {
  name: string;
};

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function FacilityIcon({ name }: IconProps) {
  switch (name) {
    case "ac":
      return (
        <Svg>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </Svg>
      );
    case "board":
      return (
        <Svg>
          <rect x="3.5" y="5" width="17" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </Svg>
      );
    case "furniture":
      return (
        <Svg>
          <path d="M5 11h14v8H5zM7 11V8h10v3M8 19v2M16 19v2" />
        </Svg>
      );
    case "bright":
      return (
        <Svg>
          <rect x="4" y="5" width="16" height="12" rx="1.5" />
          <path d="M4 10h16M8 21h8" />
        </Svg>
      );
    case "computers":
      return (
        <Svg>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </Svg>
      );
    case "internet":
      return (
        <Svg>
          <path d="M5 16c3.5-4 10.5-4 14 0" />
          <path d="M8 18.5c2-2.2 6-2.2 8 0" />
          <circle cx="12" cy="21" r="1" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "software":
      return (
        <Svg>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="m8 12 2.2 2.2L16 9" />
        </Svg>
      );
    case "handsOn":
      return (
        <Svg>
          <path d="M8 13V8.5a1.5 1.5 0 0 1 3 0V13M11 12V7.5a1.5 1.5 0 0 1 3 0V13M14 12.5V9a1.5 1.5 0 0 1 3 0v8.5a4 4 0 0 1-4 4H11a5 5 0 0 1-5-5v-3.5A1.5 1.5 0 0 1 8 12" />
        </Svg>
      );
    case "equipment":
      return (
        <Svg>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
        </Svg>
      );
    case "experiment":
      return (
        <Svg>
          <path d="M9 3h6M10 3v5l-4.5 9A3 3 0 0 0 8.2 21h7.6a3 3 0 0 0 2.7-4L14 8V3" />
        </Svg>
      );
    case "safety":
      return (
        <Svg>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        </Svg>
      );
    case "curriculum":
      return (
        <Svg>
          <path d="M4 19V6l8-3 8 3v13l-8-3-8 3Z" />
        </Svg>
      );
    case "lego":
      return (
        <Svg>
          <rect x="5" y="8" width="14" height="11" rx="1.5" />
          <path d="M8 8V6h3v2M13 8V6h3v2" />
        </Svg>
      );
    case "sensors":
      return (
        <Svg>
          <circle cx="12" cy="12" r="2" />
          <path d="M7 7a7 7 0 0 1 10 0M5 5a10 10 0 0 1 14 0M9 19h6" />
        </Svg>
      );
    case "project":
      return (
        <Svg>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8M8 13h5" />
        </Svg>
      );
    case "innovation":
      return (
        <Svg>
          <path d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.8 1-1.5 2-1.5 4h-5c0-2-.7-3-1.5-4Z" />
        </Svg>
      );
    case "books":
      return (
        <Svg>
          <path d="M5 5h6v14H5zM13 5h6v14h-6z" />
        </Svg>
      );
    case "digital":
      return (
        <Svg>
          <rect x="3" y="5" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
        </Svg>
      );
    case "reading":
      return (
        <Svg>
          <path d="M4 18V7l8 3 8-3v11l-8 3-8-3Z" />
        </Svg>
      );
    case "research":
      return (
        <Svg>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-3.5-3.5" />
        </Svg>
      );
    case "seating":
      return (
        <Svg>
          <path d="M5 14h14v5H5zM7 14V9h10v5M8 19v2M16 19v2" />
        </Svg>
      );
    case "av":
      return (
        <Svg>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="m10 10 5 2-5 2v-4Z" />
        </Svg>
      );
    case "stage":
      return (
        <Svg>
          <path d="M4 18h16M7 18V9l5-3 5 3v9" />
        </Svg>
      );
    case "events":
      return (
        <Svg>
          <path d="M8 3v3M16 3v3M4 9h16M6 6h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        </Svg>
      );
    case "hygiene":
      return (
        <Svg>
          <path d="M8 21h8M12 3c2 3 5 6 5 10a5 5 0 0 1-10 0c0-4 3-7 5-10Z" />
        </Svg>
      );
    case "meals":
      return (
        <Svg>
          <path d="M4 10c0 6 3.5 8 8 11 4.5-3 8-5 8-11H4Z" />
          <path d="M8 10V5M12 10V4M16 10V6" />
        </Svg>
      );
    case "dining":
      return (
        <Svg>
          <path d="M5 10h14v2H5zM7 12v7M17 12v7M4 19h16" />
        </Svg>
      );
    case "supervised":
      return (
        <Svg>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </Svg>
      );
    case "transport":
    case "bus":
      return (
        <Svg>
          <rect x="4" y="6" width="16" height="10" rx="2" />
          <path d="M6 16v2M18 16v2M4 12h16" />
          <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "gps":
      return (
        <Svg>
          <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.2" />
        </Svg>
      );
    case "driver":
      return (
        <Svg>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.2-3.5 3.6-5 7-5s5.8 1.5 7 5" />
        </Svg>
      );
    case "shield":
      return (
        <Svg>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        </Svg>
      );
    case "daycare":
      return (
        <Svg>
          <circle cx="8" cy="9" r="2.2" />
          <circle cx="16" cy="9" r="2.2" />
          <path d="M4.5 18c.8-3 2.8-4.5 7.5-4.5S18.7 15 19.5 18" />
        </Svg>
      );
    case "secure":
      return (
        <Svg>
          <rect x="6" y="11" width="12" height="9" rx="1.5" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </Svg>
      );
    case "caregivers":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4 19c.7-3 2.6-4.5 6.5-4.5S16.8 16 17.5 19M16 13.2c2.2.2 3.8 1.3 4.5 3.8" />
        </Svg>
      );
    case "activities":
      return (
        <Svg>
          <circle cx="12" cy="8" r="3" />
          <path d="m8 21 4-7 4 7M6 14h12" />
        </Svg>
      );
    case "play":
      return (
        <Svg>
          <path d="M6 10h12l-1 9H7l-1-9Z" />
          <path d="M9 10V8a3 3 0 0 1 6 0v2" />
        </Svg>
      );
    case "infirmary":
    case "firstaid":
      return (
        <Svg>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M12 8v8M8 12h8" />
        </Svg>
      );
    case "nurse":
      return (
        <Svg>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.2-3.5 3.6-5 7-5s5.8 1.5 7 5M12 12v2" />
        </Svg>
      );
    case "emergency":
      return (
        <Svg>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="M12 10v3M12 16h.01" />
        </Svg>
      );
    case "wellbeing":
      return (
        <Svg>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        </Svg>
      );
    default:
      return (
        <Svg>
          <circle cx="12" cy="12" r="7" />
        </Svg>
      );
  }
}
