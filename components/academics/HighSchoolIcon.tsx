function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function HighSchoolIcon({ name }: { name: string }) {
  switch (name) {
    case "cap":
      return (
        <Svg>
          <path d="M3 10 12 5l9 5-9 5Z" />
          <path d="M7 12.2v4.2c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4.2" />
          <path d="M21 10v6" />
        </Svg>
      );
    case "mentorship":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="1.8" />
          <path d="M4.5 18c.7-3.2 2.6-5 4.5-5s3.8 1.8 4.5 5" />
          <path d="M13.2 18c.4-2.2 1.6-3.5 3-3.5 1.5 0 2.6 1.2 3.1 3.5" />
        </Svg>
      );
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
    case "language":
      return (
        <Svg>
          <path d="M5 5.5C7.5 4.2 10 4.5 12 6c2-1.5 4.5-1.8 7-.5V19c-2.5-1.3-5-1-7 .5-2-1.5-4.5-1.8-7-.5Z" />
          <path d="M12 6v13.5" />
        </Svg>
      );
    case "literature":
      return (
        <Svg>
          <path d="M6 5h9a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2V5Z" />
          <path d="M6 5a2 2 0 0 0-2 2v12" />
          <path d="M9 9h5.5M9 13h4" />
        </Svg>
      );
    case "secondLanguage":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.4 2.8 3.6 5.4 3.6 8S14.4 17.2 12 20M12 4C9.6 6.8 8.4 9.4 8.4 12S9.6 17.2 12 20" />
        </Svg>
      );
    case "civics":
      return (
        <Svg>
          <path d="M4 10h16L12 4 4 10Z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8M5 18h14" />
        </Svg>
      );
    case "geography":
      return (
        <Svg>
          <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.2" />
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
    case "chemistry":
      return (
        <Svg>
          <path d="M9 3h6M10 3v5l-4.5 9A3 3 0 0 0 8.2 21h7.6a3 3 0 0 0 2.7-4L14 8V3" />
        </Svg>
      );
    case "maths":
      return (
        <Svg>
          <path d="M8 5v14M16 5v14M5 9h14M5 15h14" />
        </Svg>
      );
    case "commerce":
    case "economics":
      return (
        <Svg>
          <path d="M4 19h16M7 16V11M12 16V7M17 16v-4" />
        </Svg>
      );
    case "science":
      return (
        <Svg>
          <path d="M9 3h6M10 3v5.2L5.6 16.4A3.2 3.2 0 0 0 8.4 21h7.2a3.2 3.2 0 0 0 2.8-4.6L14 8.2V3" />
          <path d="M8.2 14.5h7.6" />
        </Svg>
      );
    case "computer":
      return (
        <Svg>
          <rect x="4" y="5" width="16" height="11" rx="1.6" />
          <path d="M2.5 18h19l-1.1 1.7A1.6 1.6 0 0 1 19 20.5H5a1.6 1.6 0 0 1-1.4-.8Z" />
        </Svg>
      );
    case "pe":
      return (
        <Svg>
          <circle cx="14.2" cy="5.2" r="2" />
          <path d="M5 21l4.2-7.2 3.2 2.2 3.1 7" />
          <path d="M12.4 10.4 16 8l4 2.2" />
          <path d="M9.2 13.8 7 10.2 4.8 11.4" />
        </Svg>
      );
    case "robotics":
      return (
        <Svg>
          <circle cx="12" cy="12" r="3.1" />
          <path d="M12 3.2v2.4M12 18.4v2.4M4.5 6.6l1.7 1.7M17.8 15.7l1.7 1.7M3.2 12h2.4M18.4 12h2.4M4.5 17.4l1.7-1.7M17.8 8.3l1.7-1.7" />
          <path d="M8.4 5.6 9.4 7.4M15.6 5.6 14.6 7.4M8.4 18.4 9.4 16.6M15.6 18.4 14.6 16.6" />
        </Svg>
      );
    case "art":
      return (
        <Svg>
          <path d="M12 4c5 0 8 3.2 8 7.2 0 2.5-1.6 3.9-3.5 3.9h-2.6c-1.2 0-2 .9-2 2 0 .6.2 1.1.6 1.5.5.6 0 1.6-.9 1.6C7.6 20.2 4 16.8 4 12 4 7.4 7.4 4 12 4Z" />
          <circle cx="9" cy="11" r="0.8" fill="currentColor" />
          <circle cx="12.2" cy="8.4" r="0.8" fill="currentColor" />
          <circle cx="15.4" cy="11.2" r="0.8" fill="currentColor" />
        </Svg>
      );
    case "environment":
      return (
        <Svg>
          <path d="M6 19c7.5-1.2 12.4-7 13.4-15-7.8 1.4-13.2 7.2-13.4 15Z" />
          <path d="M6 19c2.6-4.2 7.4-8.2 13.4-10.2" />
        </Svg>
      );
    case "trophy":
      return (
        <Svg>
          <path d="M8 5h8v4a4 4 0 0 1-8 0Z" />
          <path d="M8 7H5.5A2.5 2.5 0 0 0 8 9.5M16 7h2.5A2.5 2.5 0 0 1 16 9.5" />
          <path d="M12 13v3M9 20h6M10 17h4" />
        </Svg>
      );
    case "skills":
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
    case "wellbeing":
      return (
        <Svg>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
        </Svg>
      );
    case "sports":
      return (
        <Svg>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4c2.2 2.4 3.4 5 3.4 8S14.2 17.6 12 20M12 4C9.8 6.4 8.6 9 8.6 12S9.8 17.6 12 20M4.5 9.5h15M4.5 14.5h15" />
        </Svg>
      );
    case "arts":
      return (
        <Svg>
          <path d="M9 18.5a2.5 2.5 0 1 1-2.2-2.48V8.5L19 6v8.2" />
          <circle cx="16.8" cy="16.7" r="2.5" />
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
    case "plant":
      return (
        <Svg>
          <path d="M12 21v-8" />
          <path d="M12 13c0-6 4-9 8-10-1 6-4 9-8 10" />
          <path d="M12 13c0-5-4-8-8-9 1 6 4 8 8 9" />
        </Svg>
      );
    case "citizens":
      return (
        <Svg>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.2-3.5 3.6-5 7-5s5.8 1.5 7 5" />
        </Svg>
      );
    case "star":
      return (
        <Svg>
          <path d="M12 3.5 13.6 9h5.4l-4.4 3.3 1.7 5.5L12 14.7 7.7 17.8l1.7-5.5L5 9h5.4Z" />
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
