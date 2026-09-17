function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function KindergartenIcon({ name }: { name: string }) {
  switch (name) {
    case "plant":
      return (
        <Svg>
          <path d="M12 21v-8" />
          <path d="M12 13c0-6 4-9 8-10-1 6-4 9-8 10" />
          <path d="M12 13c0-5-4-8-8-9 1 6 4 8 8 9" />
        </Svg>
      );
    case "book":
      return (
        <Svg>
          <path d="M5 5.5C7.5 4.2 10 4.5 12 6c2-1.5 4.5-1.8 7-0.5V19c-2.5-1.3-5-1-7 .5-2-1.5-4.5-1.8-7-.5Z" />
          <path d="M12 6v13.5" />
        </Svg>
      );
    case "cap":
      return (
        <Svg>
          <path d="M3 10 12 6l9 4-9 4-9-4Z" />
          <path d="M7 12.2v4.3c0 .8 2.2 2.5 5 2.5s5-1.7 5-2.5v-4.3" />
          <path d="M21 10v6" />
        </Svg>
      );
    case "literacy":
      return (
        <Svg>
          <path d="M6 5h9a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2V5Z" />
          <path d="M6 5a2 2 0 0 0-2 2v12" />
          <path d="M9 9h5.5M9 13h4" />
        </Svg>
      );
    case "creativity":
      return (
        <Svg>
          <path d="M12 4c5 0 8 3.4 8 7.4 0 2.6-1.6 4-3.6 4h-2.8c-1.2 0-2 .9-2 2 0 .6.2 1.1.6 1.5.5.6.1 1.6-.8 1.6C7.6 20.9 4 17.4 4 12.4 4 7.4 7.4 4 12 4Z" />
          <circle cx="8.8" cy="11.2" r="1" fill="currentColor" stroke="none" />
          <circle cx="12.2" cy="8.6" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
        </Svg>
      );
    case "numeracy":
      return (
        <Svg>
          <path d="M8 5v14M16 5v14M5 9h14M5 15h14" />
        </Svg>
      );
    case "physical":
      return (
        <Svg>
          <circle cx="12" cy="5.5" r="2" />
          <path d="M8 21l2.2-6.2L7 13l2-5 5 3.5 3-1.5 1.6 3.2" />
          <path d="M12.2 9.6 14 21" />
        </Svg>
      );
    case "communication":
      return (
        <Svg>
          <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H11l-4 4v-4H8.5A3.5 3.5 0 0 1 5 11.5Z" />
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
    default:
      return (
        <Svg>
          <circle cx="12" cy="12" r="7" />
        </Svg>
      );
  }
}
