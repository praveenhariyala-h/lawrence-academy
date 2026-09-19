function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function MiddleSchoolIcon({ name }: { name: string }) {
  switch (name) {
    case "brain":
      return (
        <Svg>
          <path d="M8.2 9.2A3.2 3.2 0 0 1 12 6.2a3.2 3.2 0 0 1 3.6 3.1c1.6.4 2.7 1.8 2.7 3.5 0 1.4-.8 2.6-2 3.2v2.2c0 .9-.7 1.6-1.6 1.6h-5.4A1.6 1.6 0 0 1 7.7 18v-2.2a3.4 3.4 0 0 1-1.4-2.8c0-1.6 1-3 2-3.8Z" />
          <path d="M12 8.5v9.2M9.2 12.2h2.6M13.4 14.4H15" />
        </Svg>
      );
    case "heart":
      return (
        <Svg>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        </Svg>
      );
    case "guided":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "navigate":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
          <path d="m12 8 2.2 4H9.8Z" />
        </Svg>
      );
    case "explore":
      return (
        <Svg>
          <path d="M9 21h6M10 18h4M12 3a5 5 0 0 1 5 5c0 2.2-1.3 3.8-3 4.6V14h-4v-1.4C8.3 11.8 7 10.2 7 8a5 5 0 0 1 5-5Z" />
        </Svg>
      );
    case "work":
      return (
        <Svg>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5v2.2M12 18.3v2.2M4.8 6.8l1.6 1.6M17.6 15.6l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.8 17.2l1.6-1.6M17.6 8.4l1.6-1.6" />
        </Svg>
      );
    case "succeed":
      return (
        <Svg>
          <path d="M4 16.5 9 11l3.5 3.5L20 7" />
          <path d="M14.5 7H20v5.5" />
        </Svg>
      );
    case "robotics":
      return (
        <Svg>
          <rect x="6" y="8" width="12" height="10" rx="2" />
          <path d="M12 8V5M9 13h.01M15 13h.01M10 16h4M4 12h2M18 12h2" />
        </Svg>
      );
    case "run":
      return (
        <Svg>
          <circle cx="14.5" cy="5" r="1.8" />
          <path d="M8.5 21 11 13l3.2-1.2 2 4.2 3.3 1.2M5 14.5 11 13l-1.8-3.2L13 8.2" />
        </Svg>
      );
    case "performing":
      return (
        <Svg>
          <path d="M4 8.5c0-2 1.6-3.5 4-3.5 1.8 0 3 .7 4 2 1-1.3 2.2-2 4-2 2.4 0 4 1.5 4 3.5 0 4-2.6 7.5-8 9.5-5.4-2-8-5.5-8-9.5Z" />
          <path d="M8 10.5h.01M11 10.5h.01M8.5 13c.6.7 1.5 1 2.5 1" />
        </Svg>
      );
    case "yoga":
      return (
        <Svg>
          <path d="M12 20c-2.2-2-6-5.2-6-8.4A3.6 3.6 0 0 1 12 9a3.6 3.6 0 0 1 6 2.6C18 14.8 14.2 18 12 20Z" />
          <path d="M12 9V4M9 6.5 12 9l3-2.5" />
        </Svg>
      );
    case "life":
      return (
        <Svg>
          <path d="M12 21v-8" />
          <path d="M12 13c0-6 4-9 8-10-1 6-4 9-8 10" />
          <path d="M12 13c0-5-4-8-8-9 1 6 4 8 8 9" />
        </Svg>
      );
    case "vedic":
      return (
        <Svg>
          <path d="M5 5h14v14H5Z" />
          <path d="M5 10h14M5 14h14M9 5v14M15 5v14" />
          <circle cx="7" cy="7.5" r="0.9" fill="currentColor" />
          <circle cx="12" cy="7.5" r="0.9" fill="currentColor" />
          <circle cx="17" cy="12" r="0.9" fill="currentColor" />
          <circle cx="7" cy="16.5" r="0.9" fill="currentColor" />
          <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
        </Svg>
      );
    case "finance":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M9.5 10.2c.6-.8 1.5-1.2 2.5-1.2 1.6 0 2.6.8 2.6 2 0 2.6-5.1 1.4-5.1 3.8 0 1.1 1 2 2.6 2 1.1 0 2-.4 2.5-1.2" />
        </Svg>
      );
    case "taekwondo":
      return (
        <Svg>
          <circle cx="14" cy="5" r="1.8" />
          <path d="M13 8.2 9 13l-4 1.5M13 8.2 16 13l5-1M9 13l2 8M16 13l-1.5 8" />
        </Svg>
      );
    case "dance":
      return (
        <Svg>
          <circle cx="12" cy="5" r="2" />
          <path d="M9 21 12 9l5 3-2 9M7 13l5-4 5 2" />
        </Svg>
      );
    case "music":
      return (
        <Svg>
          <path d="M9 18.5a2.5 2.5 0 1 1-2.2-2.48V8.5L19 6v8.2" />
          <circle cx="16.8" cy="16.7" r="2.5" />
        </Svg>
      );
    case "pottery":
      return (
        <Svg>
          <path d="M8 10c0-2 1.8-4 4-4s4 2 4 4c2.2.4 3 1.7 3 3.2 0 3.2-3.1 5.8-7 5.8s-7-2.6-7-5.8c0-1.5.8-2.8 3-3.2Z" />
          <path d="M10 6.2c.4-1.4 1.2-2.2 2-2.2s1.6.8 2 2.2" />
        </Svg>
      );
    case "theatre":
      return (
        <Svg>
          <path d="M4 8.5c0-2 1.6-3.5 4-3.5 1.8 0 3 .7 4 2 1-1.3 2.2-2 4-2 2.4 0 4 1.5 4 3.5 0 4-2.6 7.5-8 9.5-5.4-2-8-5.5-8-9.5Z" />
          <path d="M8 10.5h.01M11 10.5h.01M8.5 13c.6.7 1.5 1 2.5 1" />
        </Svg>
      );
    case "hobby":
      return (
        <Svg>
          <path d="M12 3.5 13.6 9h5.4l-4.4 3.3 1.7 5.5L12 14.7 7.7 17.8l1.7-5.5L5 9h5.4Z" />
        </Svg>
      );
    case "sports":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4c2.2 2.4 3.4 5 3.4 8S14.2 17.6 12 20M12 4C9.8 6.4 8.6 9 8.6 12S9.8 17.6 12 20M4.5 9.5h15M4.5 14.5h15" />
        </Svg>
      );
    case "speaking":
      return (
        <Svg>
          <path d="M4 10v4l4 1v3l4-4h2a5 5 0 0 0 0-10H8Z" />
          <path d="M19 8.5a4.5 4.5 0 0 1 0 7" />
        </Svg>
      );
    case "current":
      return (
        <Svg>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path d="M8 9h8M8 12h8M8 15h5" />
        </Svg>
      );
    case "experiential":
      return (
        <Svg>
          <path d="M12 21v-8" />
          <path d="M12 13c0-6 4-9 8-10-1 6-4 9-8 10" />
          <path d="M12 13c0-5-4-8-8-9 1 6 4 8 8 9" />
        </Svg>
      );
    case "community":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "global":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.4 2.8 3.6 5.4 3.6 8S14.4 17.2 12 20M12 4C9.6 6.8 8.4 9.4 8.4 12S9.6 17.2 12 20" />
        </Svg>
      );
    case "english":
      return (
        <Svg>
          <path d="M5 5.5C7.5 4.2 10 4.5 12 6c2-1.5 4.5-1.8 7-.5V19c-2.5-1.3-5-1-7 .5-2-1.5-4.5-1.8-7-.5Z" />
          <path d="M12 6v13.5" />
        </Svg>
      );
    case "maths":
      return (
        <Svg>
          <path d="M8 5v14M16 5v14M5 9h14M5 15h14" />
        </Svg>
      );
    case "science":
    case "chemistry":
      return (
        <Svg>
          <path d="M9 3h6M10 3v5l-4.5 9A3 3 0 0 0 8.2 21h7.6a3 3 0 0 0 2.7-4L14 8V3" />
        </Svg>
      );
    case "social":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "computer":
      return (
        <Svg>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </Svg>
      );
    case "coding":
      return (
        <Svg>
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
        </Svg>
      );
    case "biology":
      return (
        <Svg>
          <path d="M12 21v-8" />
          <path d="M12 13c0-6 4-9 8-10-1 6-4 9-8 10" />
          <path d="M12 13c0-5-4-8-8-9 1 6 4 8 8 9" />
        </Svg>
      );
    case "physics":
      return (
        <Svg>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="4" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
        </Svg>
      );
    case "geography":
      return (
        <Svg>
          <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.2" />
        </Svg>
      );
    case "civics":
      return (
        <Svg>
          <path d="M4 10h16L12 4 4 10Z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8M5 18h14" />
        </Svg>
      );
    case "thinking":
      return (
        <Svg>
          <path d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.8 1-1.5 2-1.5 4h-5c0-2-.7-3-1.5-4Z" />
        </Svg>
      );
    case "creativity":
      return (
        <Svg>
          <path d="M12 4c5 0 8 3.4 8 7.4 0 2.6-1.6 4-3.6 4h-2.8c-1.2 0-2 .9-2 2 0 .6.2 1.1.6 1.5.5.6.1 1.6-.8 1.6C7.6 20.9 4 17.4 4 12.4 4 7.4 7.4 4 12 4Z" />
        </Svg>
      );
    case "communication":
      return (
        <Svg>
          <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H11l-4 4v-4H8.5A3.5 3.5 0 0 1 5 11.5Z" />
        </Svg>
      );
    case "collaboration":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "leadership":
      return (
        <Svg>
          <path d="M9 21h6M12 17V8" />
          <path d="M12 8h7l-2 3 2 3h-7" />
        </Svg>
      );
    case "empathy":
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
