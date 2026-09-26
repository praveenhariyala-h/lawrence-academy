import { defineConfig, type Collection, type TinaField } from "tinacms";

const emphasis = "Wrap a phrase in *asterisks* to emphasise it. Use a new line for a line break.";

function text(name: string, label: string, description?: string): TinaField {
  return { type: "string", name, label, description };
}

function area(name: string, label: string, description?: string): TinaField {
  return {
    type: "string",
    name,
    label,
    description,
    ui: { component: "textarea" }
  };
}

function image(name: string, label: string): TinaField {
  return { type: "image", name, label };
}

function choice(name: string, label: string, options: string[]): TinaField {
  return { type: "string", name, label, options };
}

function lines(name: string, label: string): TinaField {
  return {
    type: "string",
    name,
    label,
    list: true,
    ui: { component: "textarea" }
  };
}

function words(name: string, label: string): TinaField {
  return { type: "string", name, label, list: true };
}

function flag(name: string, label: string): TinaField {
  return { type: "boolean", name, label };
}

function group(name: string, label: string, fields: TinaField[]): TinaField {
  return { type: "object", name, label, fields };
}

function list(name: string, label: string, fields: TinaField[], labelKey = "title"): TinaField {
  return {
    type: "object",
    name,
    label,
    list: true,
    ui: {
      itemProps: (item) => ({
        label: item?.[labelKey] || item?.name || item?.label || label
      })
    },
    fields
  };
}

function photos(name: string, label: string, caption = false): TinaField {
  const fields = [image("src", "Image"), text("alt", "Alt text")];
  if (caption) fields.push(text("caption", "Caption"));
  return list(name, label, fields, "alt");
}

function icon(name = "icon"): TinaField {
  return text(name, "Icon", "Keep the existing icon name so the illustration still matches.");
}

const metaFields: TinaField[] = [
  text("metaTitle", "Page title"),
  area("metaDescription", "Meta description")
];

function page(options: {
  name: string;
  label: string;
  folder: string;
  route: string;
  fields: TinaField[];
}): Collection {
  return {
    name: options.name,
    label: options.label,
    path: `content/${options.folder}`,
    format: "json",
    ui: {
      allowedActions: {
        create: false,
        delete: false
      },
      filename: { readonly: true },
      router: () => options.route
    },
    fields: options.fields
  };
}

const heroBanner = group("hero", "Hero", [
  text("kicker", "Kicker"),
  text("title", "Title", emphasis),
  area("lede", "Introduction"),
  image("image", "Image"),
  text("imageAlt", "Image alt text")
]);

const feature = [icon(), text("label", "Label")];

const site: Collection = {
  name: "site",
  label: "Site settings",
  path: "content/settings",
  format: "json",
  ui: {
    allowedActions: { create: false, delete: false },
    filename: { readonly: true }
  },
  fields: [
    text("name", "School name"),
    text("shortName", "Short name"),
    text("trust", "Trust"),
    text("tagline", "Tagline"),
    text("campus", "Campus"),
    area("address", "Address"),
    words("phones", "Phone numbers"),
    words("emails", "Email addresses"),
    text("transportPhone", "Transport phone"),
    list(
      "socials",
      "Social links",
      [
        choice("label", "Network", ["Facebook", "Instagram", "YouTube", "LinkedIn"]),
        text("href", "URL")
      ],
      "label"
    ),
    text("mapUrl", "Map embed URL"),
    text("footerCtaTitle", "Footer heading"),
    area("footerCtaText", "Footer text"),
    text("footerCtaAdmissions", "Footer admissions line"),
    text("footerCtaLabel", "Footer button label"),
    text("footerCtaHref", "Footer button link")
  ]
};

const home = page({
  name: "home",
  label: "Home",
  folder: "home",
  route: "/",
  fields: [
    text("metaTitle", "Browser title"),
    area("metaDescription", "Meta description"),
    text("heroLearnMoreLabel", "Hero button label"),
    text("heroLearnMoreHref", "Hero button link"),
    list("heroSlides", "Hero slides", [
      text("title", "Title"),
      area("text", "Text"),
      image("image", "Image"),
      text("alt", "Alt text"),
      choice("fit", "Image fit", ["cover", "contain"])
    ]),
    list("pathwayItems", "Pathway", [
      text("title", "Title"),
      text("detail", "Detail"),
      area("blurb", "Blurb"),
      text("extra", "Extra label"),
      image("image", "Image"),
      text("position", "Image position")
    ]),
    text("whyTitle", "Why choose us heading"),
    text("whyQuote", "Why choose us quote"),
    area("whyBody", "Why choose us text"),
    image("whyImage", "Why choose us image"),
    text("whyImageAlt", "Why choose us image alt text"),
    text("curriculumTitle", "Curriculum heading"),
    text("curriculumKicker", "Curriculum kicker"),
    list("curriculum", "Curriculum stages", [
      text("title", "Title"),
      text("grades", "Line"),
      text("href", "Link"),
      image("photo", "Photo"),
      text("photoAlt", "Photo alt text")
    ]),
    group("beyondClassroom", "Beyond the classroom", [
      text("title", "Title", emphasis),
      area("body", "Text"),
      text("ctaLabel", "Button label"),
      text("ctaHref", "Button link"),
      list("items", "Tiles", [text("title", "Title"), image("image", "Image"), text("alt", "Alt text")])
    ]),
    text("achievementsTitle", "Achievements heading"),
    text("achievementsViewAllLabel", "Achievements link label"),
    group("featuredAchievement", "Featured achievement", [
      text("title", "Title"),
      area("text", "Text"),
      text("date", "Date"),
      image("image", "Image"),
      text("alt", "Alt text"),
      text("href", "Link")
    ]),
    group("campusSpotlight", "Campus spotlight", [
      text("title", "Title"),
      area("body", "Text"),
      text("ctaLabel", "Link label"),
      text("ctaHref", "Link"),
      image("image", "Image"),
      text("alt", "Alt text")
    ]),
    text("upcomingEventsTitle", "Events heading"),
    text("upcomingEventsViewAllLabel", "Events link label"),
    list("upcomingEvents", "Upcoming events", [
      text("day", "Day"),
      text("month", "Month"),
      text("title", "Title"),
      area("text", "Text")
    ]),
    text("partnersKicker", "Partners introduction"),
    text("partnersTitle", "Partners heading"),
    list(
      "partners",
      "Partners",
      [text("name", "Name"), text("category", "Category"), image("logo", "Logo")],
      "name"
    ),
    text("chairmanKicker", "Chairman kicker"),
    text("chairmanName", "Chairman name"),
    text("chairmanRole", "Chairman role"),
    area("chairmanMessage", "Chairman message"),
    image("chairmanPhoto", "Chairman photo"),
    text("chairmanPhotoAlt", "Chairman photo alt text")
  ]
});

const person = [
  text("name", "Name"),
  text("role", "Role"),
  image("photo", "Photo"),
  text("photoAlt", "Photo alt text")
];

const about = page({
  name: "about",
  label: "About",
  folder: "about",
  route: "/about",
  fields: [
    ...metaFields,
    group("hero", "Hero", [text("title", "Title"), image("image", "Image"), text("imageAlt", "Image alt text")]),
    list("stats", "Statistics", [
      text("value", "Value"),
      text("unit", "Unit"),
      text("label", "Label"),
      choice("icon", "Icon", ["years", "results", "campus", "faculty"])
    ], "label"),
    group("journey", "Journey", [
      text("title", "Title"),
      lines("body", "Paragraphs"),
      photos("photos", "Photos"),
      group("vision", "Vision", [text("title", "Title"), area("text", "Text")]),
      group("mission", "Mission", [text("title", "Title"), area("text", "Text")])
    ]),
    group("philosophy", "Philosophy", [
      text("title", "Title"),
      area("body", "Text"),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    group("messages", "Leadership messages", [
      text("title", "Title"),
      text("kicker", "Kicker"),
      list("people", "People", [
        ...person,
        text("initials", "Initials"),
        text("position", "Photo position"),
        area("message", "Message")
      ], "name")
    ]),
    group("leadershipTeam", "Leadership team", [
      text("title", "Title"),
      text("kicker", "Kicker"),
      area("quote", "Quote"),
      list("people", "People", [...person, text("position", "Photo position")], "name")
    ]),
    group("legacy", "Legacy teachers", [
      text("title", "Title"),
      area("intro", "Introduction"),
      list("teachers", "Teachers", [
        text("name", "Name"),
        text("year", "Year"),
        text("profile", "Profile"),
        image("photo", "Photo"),
        text("photoAlt", "Photo alt text")
      ], "name")
    ]),
    group("teams", "Teams", [
      text("title", "Title"),
      text("kicker", "Kicker"),
      list("groups", "Groups", [
        text("name", "Name"),
        image("photo", "Photo"),
        text("photoAlt", "Photo alt text")
      ], "name")
    ]),
    group("values", "Values", [
      text("title", "Title"),
      list("items", "Values", [
        text("key", "Icon", "excellence, integrity, respect, curiosity, compassion, or responsibility."),
        text("title", "Title"),
        area("text", "Text")
      ])
    ]),
    area("motto", "Motto")
  ]
});

const spaceFields = (extra: TinaField[] = []): TinaField[] => [
  text("id", "Id", "Stable identifier used by the page. Leave this as it is."),
  text("title", "Title"),
  text("tagline", "Tagline"),
  area("body", "Text"),
  ...extra,
  flag("reverse", "Reverse layout"),
  group("image", "Image", [image("src", "Image"), text("alt", "Alt text"), text("caption", "Caption")]),
  photos("gallery", "Gallery", true),
  list("features", "Features", feature, "label")
];

const campus = page({
  name: "campus",
  label: "Campus",
  folder: "campus",
  route: "/about/campus",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("title", "Title", emphasis),
      area("lede", "Introduction"),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    list("spaces", "Spaces", spaceFields(), "title")
  ]
});

const facilities = page({
  name: "facilities",
  label: "Facilities",
  folder: "facilities",
  route: "/about/facilities",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("title", "Title", emphasis),
      area("lede", "Introduction"),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    list(
      "spaces",
      "Spaces",
      [
        text("id", "Id", "Stable identifier used by the page. Leave this as it is."),
        text("title", "Title"),
        text("tagline", "Tagline"),
        area("body", "Text"),
        choice("tone", "Band colour", ["default", "pink"]),
        flag("reverse", "Reverse layout"),
        icon("leadIcon"),
        group("image", "Image", [image("src", "Image"), text("alt", "Alt text")]),
        list("features", "Features", feature, "label")
      ],
      "title"
    )
  ]
});

const stageSubject = [icon(), text("title", "Title"), text("text", "Text")];

const kindergarten = page({
  name: "kindergarten",
  label: "Kindergarten",
  folder: "kindergarten",
  route: "/academics/kindergarten",
  fields: [
    ...metaFields,
    heroBanner,
    group("programme", "Approach", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos")
    ]),
    group("curriculum", "Curriculum", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      list("stages", "Stages", [text("title", "Title"), text("age", "Age"), area("body", "Text")])
    ]),
    group("development", "Learning and development", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      list("items", "Items", stageSubject)
    ]),
    group("visible", "Making learning visible", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos")
    ]),
    group("families", "Families", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos")
    ]),
    group("moments", "Moments", [text("title", "Title"), photos("photos", "Photos")])
  ]
});

const primary = page({
  name: "primary",
  label: "Primary",
  folder: "primary",
  route: "/academics/primary",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("kicker", "Kicker"),
      text("grades", "Grades"),
      text("title", "Title"),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    group("approach", "Approach", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      image("image", "Image"),
      text("imageAlt", "Image alt text"),
      list("values", "Values", stageSubject)
    ]),
    group("curriculum", "Curriculum", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      list("subjects", "Subjects", stageSubject),
      group("karadi", "Karadi Path", [
        text("title", "Title"),
        area("body", "Text"),
        image("logo", "Logo"),
        text("logoAlt", "Logo alt text")
      ])
    ]),
    group("beyond", "Beyond the classroom", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      list("items", "Items", stageSubject)
    ]),
    group("moments", "Moments", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      photos("photos", "Photos")
    ])
  ]
});

const subjectTitle = [icon(), text("title", "Title")];

const middleSchool = page({
  name: "middleSchool",
  label: "Middle School",
  folder: "middle-school",
  route: "/academics/middle-school",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("kicker", "Kicker"),
      text("grades", "Grades"),
      text("title", "Title", emphasis),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    group("approach", "Approach", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos"),
      list("values", "Values", stageSubject)
    ]),
    group("curriculum", "Curriculum", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      group("grade5", "Grade 5", [text("title", "Title"), list("subjects", "Subjects", subjectTitle)]),
      group("grade67", "Grades 6 and 7", [text("title", "Title"), list("subjects", "Subjects", subjectTitle)])
    ]),
    group("beyond", "Beyond academics", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      list("items", "Items", stageSubject)
    ]),
    group("moments", "Moments", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("lede", "Introduction"),
      photos("photos", "Photos")
    ])
  ]
});

const highSchool = page({
  name: "highSchool",
  label: "High School",
  folder: "high-school",
  route: "/academics/high-school",
  fields: [
    ...metaFields,
    heroBanner,
    group("approach", "Approach", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos"),
      list("values", "Values", stageSubject)
    ]),
    group("curriculum", "Curriculum", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      group("grade8", "Grade 8", [
        text("title", "Title"),
        text("subtitle", "Subtitle"),
        list("subjects", "Subjects", subjectTitle)
      ]),
      group("grade910", "Grades 9 and 10", [
        text("title", "Title"),
        text("subtitle", "Subtitle"),
        area("lede", "Introduction"),
        list("groups", "Groups", [
          text("title", "Title"),
          text("subtitle", "Subtitle"),
          choice("tone", "Colour", ["peach", "blue", "gold"]),
          list("subjects", "Subjects", [...subjectTitle, text("detail", "Detail")])
        ])
      ])
    ]),
    group("beyond", "Beyond academics", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      area("body", "Text"),
      photos("photos", "Photos"),
      list("values", "Values", stageSubject)
    ]),
    group("moments", "Moments", [
      text("kicker", "Kicker"),
      text("title", "Title"),
      photos("photos", "Photos")
    ])
  ]
});

const beyondBooks = page({
  name: "beyondBooks",
  label: "Beyond Books",
  folder: "beyond-books",
  route: "/beyond-books",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("kicker", "Kicker"),
      text("title", "Title", emphasis),
      area("lede", "Introduction"),
      text("badge", "Badge"),
      image("image", "Image"),
      text("imageAlt", "Image alt text")
    ]),
    group("sports", "Sports", [
      text("title", "Title"),
      text("lede", "Introduction"),
      lines("body", "Paragraphs"),
      photos("photos", "Photos", true)
    ]),
    group("creative", "Creative expression", [
      text("title", "Title"),
      text("lede", "Introduction"),
      photos("photos", "Photos", true),
      list("items", "Items", [text("title", "Title"), area("body", "Text")])
    ]),
    group("communication", "Communication", [
      text("title", "Title"),
      text("lede", "Introduction"),
      photos("photos", "Photos", true),
      list("items", "Items", [icon(), text("title", "Title"), area("body", "Text")])
    ]),
    group("stem", "STEM", [
      text("title", "Title"),
      text("lede", "Introduction"),
      text("kicker", "Kicker"),
      area("body", "Text"),
      list("tracks", "Tracks", [
        text("title", "Title"),
        list("steps", "Steps", [text("grades", "Grades"), area("text", "Text")], "grades")
      ]),
      photos("photos", "Photos", true)
    ]),
    list("programmes", "Programmes", [
      text("title", "Title"),
      text("lede", "Introduction"),
      area("body", "Text"),
      image("image", "Image"),
      text("imageAlt", "Image alt text"),
      choice("tone", "Colour", ["plain", "gold"])
    ]),
    group("trips", "Trips", [
      text("title", "Title"),
      text("lede", "Introduction"),
      area("body", "Text"),
      photos("photos", "Photos", true)
    ])
  ]
});

const newsCard = [
  text("kicker", "Kicker"),
  text("title", "Title"),
  area("body", "Text"),
  photos("photos", "Photos")
];

const news = page({
  name: "news",
  label: "News",
  folder: "news",
  route: "/news",
  fields: [
    ...metaFields,
    group("hero", "Hero", [
      text("kicker", "Kicker"),
      text("title", "Title", emphasis),
      area("lede", "Introduction"),
      image("image", "Image"),
      text("imageAlt", "Image alt text"),
      choice("fit", "Image fit", ["cover", "contain"])
    ]),
    group("tabs", "Tabs", [
      text("resultLabel", "Results label"),
      text("achievementLabel", "Achievements label"),
      text("eventLabel", "Events label"),
      text("resultEmpty", "Empty results message"),
      text("achievementEmpty", "Empty achievements message"),
      text("eventEmpty", "Empty events message")
    ]),
    list("results", "Results", newsCard),
    list("achievements", "Achievements", newsCard),
    list("events", "Events", [
      text("day", "Day"),
      text("month", "Month"),
      text("title", "Title"),
      area("text", "Summary"),
      area("body", "Text"),
      photos("photos", "Photos")
    ])
  ]
});

const admissions = page({
  name: "admissions",
  label: "Admissions",
  folder: "admissions",
  route: "/admissions",
  fields: [
    ...metaFields,
    group("hero", "Hero", [text("kicker", "Kicker"), text("title", "Title"), area("lede", "Introduction")]),
    text("openingsKicker", "Openings kicker"),
    text("openingsTitle", "Openings heading"),
    list("stages", "Stages", [text("title", "Title"), area("text", "Text")]),
    text("processKicker", "Process kicker"),
    text("processTitle", "Process heading"),
    list("steps", "Steps", [text("title", "Title"), area("text", "Text")]),
    text("feesKicker", "Fees kicker"),
    text("feesTitle", "Fees heading"),
    area("feesNote", "Fees note"),
    list("fees", "Fee rows", [
      text("name", "Component"),
      area("covers", "What it covers"),
      text("when", "When")
    ], "name"),
    text("documentsKicker", "Documents kicker"),
    text("documentsTitle", "Documents heading"),
    area("documentsBody", "Documents introduction"),
    words("documents", "Documents"),
    text("applyKicker", "Enquiry kicker"),
    text("applyTitle", "Enquiry heading"),
    area("applyBody", "Enquiry text"),
    text("helplineTitle", "Helpline heading"),
    text("visitNote", "Visit note"),
    text("visitLinkLabel", "Visit link label"),
    text("submitLabel", "Form button label")
  ]
});

const contact = page({
  name: "contact",
  label: "Contact",
  folder: "contact",
  route: "/contact",
  fields: [
    ...metaFields,
    text("kicker", "Kicker"),
    text("title", "Title"),
    area("lede", "Introduction"),
    text("officeHeading", "Office heading"),
    text("transportHeading", "Transport heading"),
    area("transportBody", "Transport text"),
    text("mapTitle", "Map heading")
  ]
});

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.HEAD ||
  "cursor/nextjs-school-spa";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images"
    }
  },
  schema: {
    collections: [
      site,
      home,
      about,
      campus,
      facilities,
      kindergarten,
      primary,
      middleSchool,
      highSchool,
      beyondBooks,
      news,
      admissions,
      contact
    ]
  }
});
