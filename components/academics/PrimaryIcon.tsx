function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function PrimaryIcon({ name }: { name: string }) {
  switch (name) {
    case "child":
      return (
        <Svg>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        </Svg>
      );
    case "holistic":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "arts":
      return (
        <Svg>
          <path d="M12 4c5 0 8 3.4 8 7.4 0 2.6-1.6 4-3.6 4h-2.8c-1.2 0-2 .9-2 2 0 .6.2 1.1.6 1.5.5.6.1 1.6-.8 1.6C7.6 20.9 4 17.4 4 12.4 4 7.4 7.4 4 12 4Z" />
          <circle cx="8.8" cy="11.2" r="1" fill="currentColor" stroke="none" />
          <circle cx="12.2" cy="8.6" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "pe":
      return (
        <Svg>
          <circle cx="12" cy="5.5" r="2" />
          <path d="M8 21l2.2-6.2L7 13l2-5 5 3.5 3-1.5 1.6 3.2" />
          <path d="M12.2 9.6 14 21" />
        </Svg>
      );
    case "yoga":
      return (
        <Svg>
          <circle cx="12" cy="5.2" r="1.8" />
          <path d="M12 8.2v4.2M8 21l4-8.6L16 21M6.5 12.5 12 12l5.5.5" />
        </Svg>
      );
    case "music":
      return (
        <Svg>
          <path d="M9 18.5a2.5 2.5 0 1 1-2.2-2.48V8.5L19 6v8.2" />
          <circle cx="16.8" cy="16.7" r="2.5" />
        </Svg>
      );
    case "dance":
      return (
        <Svg>
          <circle cx="12" cy="5" r="2" />
          <path d="M9 21 12 9l5 3-2 9M7 13l5-4 5 2" />
        </Svg>
      );
    case "theatre":
      return (
        <Svg>
          <path d="M4 8.5c0-2 1.6-3.5 4-3.5 1.8 0 3 .7 4 2 1-1.3 2.2-2 4-2 2.4 0 4 1.5 4 3.5 0 4-2.6 7.5-8 9.5-5.4-2-8-5.5-8-9.5Z" />
          <path d="M8 10.5h.01M11 10.5h.01M8.5 13c.6.7 1.5 1 2.5 1" />
        </Svg>
      );
    case "taekwondo":
      return (
        <Svg>
          <circle cx="14" cy="5" r="1.8" />
          <path d="M13 8.2 9 13l-4 1.5M13 8.2 16 13l5-1M9 13l2 8M16 13l-1.5 8" />
        </Svg>
      );
    case "robotics":
      return (
        <Svg>
          <rect x="6" y="8" width="12" height="10" rx="2" />
          <path d="M12 8V5M9 13h.01M15 13h.01M10 16h4M4 12h2M18 12h2" />
        </Svg>
      );
    case "chess":
      return (
        <Svg>
          <path d="M8 20h8M10 20v-3h4v3" />
          <path d="M9 17h6l-1-4H10Z" />
          <path d="M10.5 13 9 9h6l-1.5 4" />
          <circle cx="12" cy="7" r="1.6" />
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
    case "values":
      return (
        <Svg>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        </Svg>
      );
    case "excursions":
      return (
        <Svg>
          <rect x="4" y="6" width="16" height="10" rx="2" />
          <path d="M6 16v2M18 16v2M4 12h16" />
          <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "curiosity":
      return (
        <Svg>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-3.5-3.5" />
        </Svg>
      );
    case "confidence":
      return (
        <Svg>
          <path d="M12 3.5 13.6 9h5.4l-4.4 3.3 1.7 5.5L12 14.7 7.7 17.8l1.7-5.5L5 9h5.4Z" />
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
    case "independence":
      return (
        <Svg>
          <circle cx="12" cy="6.5" r="2.2" />
          <path d="M12 10v5M9 21l3-6 3 6M8 13.5h8" />
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
      return (
        <Svg>
          <path d="M9 3h6M10 3v5l-4.5 9A3 3 0 0 0 8.2 21h7.6a3 3 0 0 0 2.7-4L14 8V3" />
        </Svg>
      );
    case "social":
      return (
        <Svg>
          <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.2" />
        </Svg>
      );
    case "kannada":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M8 15c1.2-3 2.4-5.5 4-8 1.6 2.5 2.8 5 4 8M9.2 12.5h5.6" />
        </Svg>
      );
    case "hindi":
      return (
        <Svg>
          <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H11l-4 4v-4H8.5A3.5 3.5 0 0 1 5 11.5Z" />
          <path d="M9 8h6M9 11h4" />
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
    default:
      return (
        <Svg>
          <circle cx="12" cy="12" r="7" />
        </Svg>
      );
  }
}
