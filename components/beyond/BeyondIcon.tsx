function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function BeyondIcon({ name }: { name: string }) {
  switch (name) {
    case "mun":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
    case "assembly":
      return (
        <Svg>
          <path d="M4 10v4l4 1v3l4-4h2a5 5 0 0 0 0-10H8Z" />
          <path d="M19 8.5a4.5 4.5 0 0 1 0 7" />
        </Svg>
      );
    case "showtell":
      return (
        <Svg>
          <circle cx="12" cy="7" r="2.4" />
          <path d="M7 20c.8-3.2 2.8-5 5-5s4.2 1.8 5 5" />
          <path d="M16 4.8 17.2 7l2.2.3-1.6 1.6.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.6 2.2-.3Z" />
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
