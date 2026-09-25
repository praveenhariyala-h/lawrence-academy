import { fields } from "@keystatic/core";

function cmsImage(label: string, folder?: string) {
  return fields.image({
    label,
    directory: folder ? `public/images/${folder}` : "public/images",
    publicPath: folder ? `/images/${folder}/` : "/images/"
  });
}

function photo(folder?: string) {
  return fields.object({
    src: cmsImage("Image", folder),
    alt: fields.text({ label: "Alt text" })
  });
}

function captionedPhoto(folder?: string) {
  return fields.object({
    src: cmsImage("Image", folder),
    alt: fields.text({ label: "Alt text" }),
    caption: fields.text({ label: "Caption" })
  });
}

function iconSelect<const T extends readonly { label: string; value: string }[]>(
  options: T,
  defaultValue: T[number]["value"]
) {
  return fields.select({
    label: "Icon",
    options,
    defaultValue
  });
}

const aboutStatIcons = [
  { label: "Years", value: "years" },
  { label: "Results", value: "results" },
  { label: "Campus", value: "campus" },
  { label: "Faculty", value: "faculty" }
] as const;

const aboutValueKeys = [
  { label: "Excellence", value: "excellence" },
  { label: "Integrity", value: "integrity" },
  { label: "Respect", value: "respect" },
  { label: "Curiosity", value: "curiosity" },
  { label: "Compassion", value: "compassion" },
  { label: "Responsibility", value: "responsibility" }
] as const;

const kindergartenIcons = [
  { label: "Literacy", value: "literacy" },
  { label: "Numeracy", value: "numeracy" },
  { label: "Creativity", value: "creativity" },
  { label: "Communication", value: "communication" },
  { label: "Physical", value: "physical" },
  { label: "Social", value: "social" },
  { label: "Plant", value: "plant" },
  { label: "Book", value: "book" },
  { label: "Cap", value: "cap" }
] as const;

const primaryIcons = [
  { label: "Child-centred", value: "child" },
  { label: "Experiential", value: "experiential" },
  { label: "Holistic", value: "holistic" },
  { label: "Values", value: "values" },
  { label: "English", value: "english" },
  { label: "Mathematics", value: "maths" },
  { label: "Science", value: "science" },
  { label: "Social Studies", value: "social" },
  { label: "Kannada", value: "kannada" },
  { label: "Hindi", value: "hindi" },
  { label: "Computers", value: "computer" },
  { label: "Coding", value: "coding" },
  { label: "Creative Arts", value: "arts" },
  { label: "Performing Arts", value: "theatre" },
  { label: "Physical Education", value: "pe" },
  { label: "Robotics", value: "robotics" }
] as const;

const middleSchoolIcons = [
  { label: "Navigate", value: "navigate" },
  { label: "Explore", value: "explore" },
  { label: "Work Hard", value: "work" },
  { label: "Succeed", value: "succeed" },
  { label: "English", value: "english" },
  { label: "Social Studies", value: "social" },
  { label: "Mathematics", value: "maths" },
  { label: "Computers", value: "computer" },
  { label: "Science", value: "science" },
  { label: "Coding", value: "coding" },
  { label: "Geography", value: "geography" },
  { label: "History & Civics", value: "civics" },
  { label: "Biology", value: "biology" },
  { label: "Physics", value: "physics" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Vedic Math", value: "vedic" },
  { label: "Financial Literacy", value: "finance" },
  { label: "Robotics", value: "robotics" },
  { label: "Sports", value: "run" },
  { label: "Performing Arts", value: "performing" },
  { label: "Pottery", value: "pottery" },
  { label: "Public Speaking", value: "speaking" },
  { label: "Yoga", value: "yoga" },
  { label: "Life Skills", value: "life" }
] as const;

const highSchoolIcons = [
  { label: "Graduation cap", value: "cap" },
  { label: "Mentorship", value: "mentorship" },
  { label: "Trophy", value: "trophy" },
  { label: "Language", value: "language" },
  { label: "Literature", value: "literature" },
  { label: "Second language", value: "secondLanguage" },
  { label: "History & Civics", value: "civics" },
  { label: "Geography", value: "geography" },
  { label: "Biology", value: "biology" },
  { label: "Physics", value: "physics" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Mathematics", value: "maths" },
  { label: "Science", value: "science" },
  { label: "Computers", value: "computer" },
  { label: "Economics", value: "economics" },
  { label: "Commerce", value: "commerce" },
  { label: "Physical Education", value: "pe" },
  { label: "Robotics", value: "robotics" },
  { label: "Art", value: "art" },
  { label: "Environment", value: "environment" },
  { label: "Think", value: "brain" },
  { label: "Heart", value: "heart" },
  { label: "Guided", value: "guided" }
] as const;

const beyondIcons = [
  { label: "Model United Nations", value: "mun" },
  { label: "Assembly", value: "assembly" },
  { label: "Show & Tell", value: "showtell" }
] as const;

const groupTones = [
  { label: "Peach", value: "peach" },
  { label: "Blue", value: "blue" },
  { label: "Gold", value: "gold" }
] as const;

const programmeTones = [
  { label: "Plain", value: "plain" },
  { label: "Gold", value: "gold" }
] as const;

const imageFit = [
  { label: "Cover (fill, may crop)", value: "cover" },
  { label: "Contain (full image, no crop)", value: "contain" }
] as const;

function homeImage(label: string, folder: string) {
  return cmsImage(label, `home/${folder}`);
}

export const homeSchema = {
  heroLearnMoreLabel: fields.text({ label: "Hero button label" }),
  heroLearnMoreHref: fields.text({ label: "Hero button link" }),
  heroSlides: fields.array(
    fields.object({
      title: fields.text({
        label: "Slide label",
        description: "Used to name this slide in the CMS. The homepage hero is image-only."
      }),
      text: fields.text({
        label: "Notes (optional)",
        multiline: true,
        description: "Not shown on the homepage."
      }),
      image: homeImage("Image", "hero"),
      alt: fields.text({ label: "Alt text" }),
      fit: fields.select({
        label: "Image fit",
        description: "Use Contain to show the full image without cropping or stretching.",
        options: [...imageFit],
        defaultValue: "cover"
      })
    }),
    {
      label: "Hero slides",
      itemLabel: (props) => props.fields.title.value || "Slide"
    }
  ),
  pathwayItems: fields.array(
    fields.object({
      title: fields.text({ label: "Title" }),
      detail: fields.text({ label: "Detail" }),
      blurb: fields.text({
        label: "Flip-card blurb",
        multiline: true
      }),
      extra: fields.text({ label: "Extra line (optional)" }),
      image: homeImage("Image", "pathway"),
      position: fields.text({
        label: "Image focus (CSS object-position)",
        description: "Example: center 30%"
      })
    }),
    {
      label: "Pathways",
      itemLabel: (props) => props.fields.title.value || "Pathway"
    }
  ),
  whyTitle: fields.text({ label: "Why Lawrence title" }),
  whyQuote: fields.text({ label: "Why Lawrence quote" }),
  whyBody: fields.text({ label: "Why Lawrence body", multiline: true }),
  whyImage: homeImage("Why Lawrence graphic", "why"),
  whyImageAlt: fields.text({ label: "Why Lawrence alt" }),
  curriculumTitle: fields.text({ label: "Curriculum title" }),
  curriculumKicker: fields.text({ label: "Curriculum kicker" }),
  curriculum: fields.array(
    fields.object({
      title: fields.text({ label: "Name" }),
      grades: fields.text({ label: "Tagline" }),
      href: fields.text({ label: "Link" }),
      photo: homeImage("Photo", "curriculum"),
      photoAlt: fields.text({ label: "Photo alt" })
    }),
    {
      label: "Curriculum stages",
      itemLabel: (props) => props.fields.title.value || "Stage"
    }
  ),
  beyondClassroom: fields.object(
    {
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Line breaks are kept on the homepage."
      }),
      body: fields.text({ label: "Body", multiline: true }),
      ctaLabel: fields.text({ label: "Button label" }),
      ctaHref: fields.text({ label: "Button link" }),
      items: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          image: cmsImage("Image", "home"),
          alt: fields.text({ label: "Alt text" })
        }),
        {
          label: "Tiles",
          itemLabel: (props) => props.fields.title.value || "Tile"
        }
      )
    },
    { label: "More Than a Classroom" }
  ),
  achievementsTitle: fields.text({ label: "Achievements title" }),
  achievementsViewAllLabel: fields.text({ label: "Achievements view-all label" }),
  campusSpotlight: fields.object(
    {
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      ctaLabel: fields.text({ label: "Link label" }),
      ctaHref: fields.text({ label: "Link" }),
      image: homeImage("Image", "hero"),
      alt: fields.text({ label: "Alt text" })
    },
    { label: "Campus spotlight" }
  ),
  upcomingEventsTitle: fields.text({ label: "Upcoming events title" }),
  upcomingEventsViewAllLabel: fields.text({ label: "Upcoming events view-all label" }),
  upcomingEvents: fields.array(
    fields.object({
      day: fields.text({ label: "Day" }),
      month: fields.text({ label: "Month" }),
      title: fields.text({ label: "Title" }),
      text: fields.text({ label: "Text" })
    }),
    {
      label: "Upcoming events",
      itemLabel: (props) => props.fields.title.value || "Event"
    }
  ),
  partnersKicker: fields.text({ label: "Partners kicker" }),
  partnersTitle: fields.text({ label: "Partners title" }),
  partners: fields.array(
    fields.object({
      name: fields.text({ label: "Name" }),
      category: fields.text({ label: "Category" }),
      logo: homeImage("Logo (optional)", "partners")
    }),
    {
      label: "Partners",
      itemLabel: (props) => props.fields.name.value || "Partner"
    }
  ),
  chairmanKicker: fields.text({ label: "Chairman kicker" }),
  chairmanName: fields.text({ label: "Chairman name" }),
  chairmanRole: fields.text({ label: "Chairman role" }),
  chairmanMessage: fields.text({
    label: "Chairman message",
    multiline: true,
    description: "Use **bold** for emphasis. Separate paragraphs with a blank line."
  }),
  chairmanPhoto: homeImage("Chairman portrait", "chairman"),
  chairmanPhotoAlt: fields.text({ label: "Chairman photo alt" })
};

export const aboutSchema = {
  hero: fields.object(
    {
      title: fields.text({ label: "Title" }),
      image: cmsImage("Image", "about"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  stats: fields.array(
    fields.object({
      value: fields.text({ label: "Value" }),
      unit: fields.text({ label: "Unit (optional)" }),
      label: fields.text({ label: "Label" }),
      icon: iconSelect(aboutStatIcons, "years")
    }),
    {
      label: "Stats",
      itemLabel: (props) => props.fields.label.value || "Stat"
    }
  ),
  journey: fields.object(
    {
      title: fields.text({ label: "Title" }),
      body: fields.text({
        label: "Body",
        multiline: true,
        description: "Separate paragraphs with a blank line."
      }),
      photos: fields.array(photo(), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      }),
      visionTitle: fields.text({ label: "Vision title" }),
      visionText: fields.text({ label: "Vision text", multiline: true }),
      missionTitle: fields.text({ label: "Mission title" }),
      missionText: fields.text({ label: "Mission text", multiline: true })
    },
    { label: "Our Journey" }
  ),
  philosophy: fields.object(
    {
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      image: cmsImage("Image", "about"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Educational Philosophy" }
  ),
  messages: fields.object(
    {
      title: fields.text({ label: "Title" }),
      kicker: fields.text({ label: "Kicker" }),
      people: fields.array(
        fields.object({
          name: fields.text({ label: "Name" }),
          role: fields.text({ label: "Role" }),
          photo: cmsImage("Photo (optional)", "about"),
          photoAlt: fields.text({ label: "Photo alt" }),
          initials: fields.text({ label: "Initials (used if no photo)" }),
          position: fields.text({
            label: "Image focus",
            description: "CSS object-position, e.g. 78% 12%"
          }),
          message: fields.text({ label: "Message", multiline: true })
        }),
        {
          label: "People",
          itemLabel: (props) => props.fields.name.value || "Leader"
        }
      )
    },
    { label: "Leadership Messages" }
  ),
  leadershipTeam: fields.object(
    {
      title: fields.text({ label: "Title" }),
      kicker: fields.text({ label: "Kicker" }),
      quote: fields.text({ label: "Quote", multiline: true }),
      people: fields.array(
        fields.object({
          name: fields.text({ label: "Name" }),
          role: fields.text({ label: "Role" }),
          photo: cmsImage("Photo", "about"),
          photoAlt: fields.text({ label: "Photo alt" }),
          position: fields.text({ label: "Image focus" })
        }),
        {
          label: "People",
          itemLabel: (props) => props.fields.name.value || "Leader"
        }
      )
    },
    { label: "Leadership Team" }
  ),
  legacy: fields.object(
    {
      title: fields.text({ label: "Title" }),
      intro: fields.text({ label: "Intro", multiline: true }),
      teachers: fields.array(
        fields.object({
          name: fields.text({ label: "Name" }),
          year: fields.text({ label: "Joined year" }),
          profile: fields.text({ label: "Profile" }),
          photo: cmsImage("Photo", "about"),
          photoAlt: fields.text({ label: "Photo alt" })
        }),
        {
          label: "Teachers",
          itemLabel: (props) => props.fields.name.value || "Teacher"
        }
      )
    },
    { label: "Dedicated Teachers" }
  ),
  teams: fields.object(
    {
      title: fields.text({ label: "Title" }),
      kicker: fields.text({ label: "Kicker" }),
      groups: fields.array(
        fields.object({
          name: fields.text({ label: "Name" }),
          photo: cmsImage("Photo", "about"),
          photoAlt: fields.text({ label: "Photo alt" })
        }),
        {
          label: "Teams",
          itemLabel: (props) => props.fields.name.value || "Team"
        }
      )
    },
    { label: "Our Teams" }
  ),
  values: fields.object(
    {
      title: fields.text({ label: "Title" }),
      items: fields.array(
        fields.object({
          key: fields.select({
            label: "Icon",
            options: aboutValueKeys,
            defaultValue: "excellence"
          }),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Values",
          itemLabel: (props) => props.fields.title.value || "Value"
        }
      ),
      motto: fields.text({
        label: "Motto",
        multiline: true
      })
    },
    { label: "Values" }
  )
};

export const kindergartenSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis. Line breaks are kept."
      }),
      lede: fields.text({ label: "Lede" }),
      image: cmsImage("Image", "about"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  programme: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Programme" }
  ),
  curriculum: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      stages: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          age: fields.text({ label: "Age" }),
          body: fields.text({ label: "Body", multiline: true })
        }),
        {
          label: "Stages",
          itemLabel: (props) => props.fields.title.value || "Stage"
        }
      )
    },
    { label: "Curriculum" }
  ),
  development: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      items: fields.array(
        fields.object({
          icon: iconSelect(kindergartenIcons, "literacy"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Items",
          itemLabel: (props) => props.fields.title.value || "Item"
        }
      )
    },
    { label: "Learning & Development" }
  ),
  visible: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Making Learning Visible" }
  ),
  families: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Engaging Families" }
  ),
  moments: fields.object(
    {
      title: fields.text({ label: "Title" }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Moments" }
  )
};

export const primarySchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      grades: fields.text({ label: "Grades" }),
      title: fields.text({ label: "Title" }),
      image: cmsImage("Image", "home/hero"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  approach: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      image: cmsImage("Image", "about"),
      imageAlt: fields.text({ label: "Alt text" }),
      values: fields.array(
        fields.object({
          icon: iconSelect(primaryIcons, "child"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Values",
          itemLabel: (props) => props.fields.title.value || "Value"
        }
      )
    },
    { label: "Approach" }
  ),
  curriculum: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      subjects: fields.array(
        fields.object({
          icon: iconSelect(primaryIcons, "english"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Subjects",
          itemLabel: (props) => props.fields.title.value || "Subject"
        }
      ),
      karadiTitle: fields.text({ label: "Karadi Path title" }),
      karadiBody: fields.text({ label: "Karadi Path body", multiline: true }),
      karadiLogo: cmsImage("Karadi Path logo", "home/partners"),
      karadiLogoAlt: fields.text({ label: "Karadi Path logo alt" })
    },
    { label: "Curriculum" }
  ),
  beyond: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      items: fields.array(
        fields.object({
          icon: iconSelect(primaryIcons, "arts"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Items",
          itemLabel: (props) => props.fields.title.value || "Item"
        }
      )
    },
    { label: "Beyond the Classroom" }
  ),
  moments: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Moments" }
  )
};

export const middleSchoolSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      grades: fields.text({ label: "Grades" }),
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis. Line breaks are kept."
      }),
      image: cmsImage("Image", "home/hero"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  approach: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo(), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      }),
      values: fields.array(
        fields.object({
          icon: iconSelect(middleSchoolIcons, "navigate"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "NEWS values",
          itemLabel: (props) => props.fields.title.value || "Value"
        }
      )
    },
    { label: "Approach" }
  ),
  curriculum: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      grade5Title: fields.text({ label: "Grade 5 title" }),
      grade5Subjects: fields.array(
        fields.object({
          icon: iconSelect(middleSchoolIcons, "english"),
          title: fields.text({ label: "Title" })
        }),
        {
          label: "Grade 5 subjects",
          itemLabel: (props) => props.fields.title.value || "Subject"
        }
      ),
      grade67Title: fields.text({ label: "Grades 6 & 7 title" }),
      grade67Subjects: fields.array(
        fields.object({
          icon: iconSelect(middleSchoolIcons, "english"),
          title: fields.text({ label: "Title" })
        }),
        {
          label: "Grades 6 & 7 subjects",
          itemLabel: (props) => props.fields.title.value || "Subject"
        }
      )
    },
    { label: "Curriculum" }
  ),
  beyond: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      items: fields.array(
        fields.object({
          icon: iconSelect(middleSchoolIcons, "vedic"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text (optional)" })
        }),
        {
          label: "Items",
          itemLabel: (props) => props.fields.title.value || "Item"
        }
      )
    },
    { label: "Beyond Academics" }
  ),
  moments: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Moments" }
  )
};

export const highSchoolSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis. Line breaks are kept."
      }),
      lede: fields.text({ label: "Lede" }),
      image: cmsImage("Image", "about"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  approach: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      }),
      values: fields.array(
        fields.object({
          icon: iconSelect(highSchoolIcons, "cap"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Values",
          itemLabel: (props) => props.fields.title.value || "Value"
        }
      )
    },
    { label: "Approach" }
  ),
  curriculum: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      grade8Title: fields.text({ label: "Grade 8 title" }),
      grade8Subtitle: fields.text({ label: "Grade 8 subtitle" }),
      grade8Subjects: fields.array(
        fields.object({
          icon: iconSelect(highSchoolIcons, "language"),
          title: fields.text({ label: "Title" })
        }),
        {
          label: "Grade 8 subjects",
          itemLabel: (props) => props.fields.title.value || "Subject"
        }
      ),
      grade910Title: fields.text({ label: "Grades 9 & 10 title" }),
      grade910Subtitle: fields.text({ label: "Grades 9 & 10 subtitle" }),
      grade910Lede: fields.text({ label: "Grades 9 & 10 lede" }),
      grade910Groups: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          subtitle: fields.text({ label: "Subtitle" }),
          note: fields.text({ label: "Note (optional)" }),
          tone: fields.select({
            label: "Colour",
            options: [...groupTones],
            defaultValue: "peach"
          }),
          subjects: fields.array(
            fields.object({
              icon: iconSelect(highSchoolIcons, "language"),
              title: fields.text({ label: "Title" }),
              detail: fields.text({ label: "Detail (optional)" })
            }),
            {
              label: "Subjects",
              itemLabel: (props) => props.fields.title.value || "Subject"
            }
          )
        }),
        {
          label: "Grade 9 & 10 groups",
          itemLabel: (props) => props.fields.title.value || "Group"
        }
      )
    },
    { label: "Curriculum" }
  ),
  beyond: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      }),
      values: fields.array(
        fields.object({
          icon: iconSelect(highSchoolIcons, "brain"),
          title: fields.text({ label: "Title" }),
          text: fields.text({ label: "Text" })
        }),
        {
          label: "Values",
          itemLabel: (props) => props.fields.title.value || "Value"
        }
      )
    },
    { label: "Beyond Academics" }
  ),
  moments: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({ label: "Title" }),
      photos: fields.array(photo("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo"
      })
    },
    { label: "Moments" }
  )
};

export const beyondBooksSchema = {
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis. Line breaks are kept."
      }),
      lede: fields.text({ label: "Lede" }),
      badge: fields.text({ label: "Badge (optional)", multiline: true }),
      image: cmsImage("Image", "home/beyond"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  sports: fields.object(
    {
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      body: fields.text({
        label: "Body",
        multiline: true,
        description: "Separate paragraphs with a blank line."
      }),
      photos: fields.array(captionedPhoto("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      })
    },
    { label: "Sports" }
  ),
  creative: fields.object(
    {
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      photos: fields.array(captionedPhoto("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      }),
      items: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          body: fields.text({ label: "Body", multiline: true })
        }),
        {
          label: "Items",
          itemLabel: (props) => props.fields.title.value || "Item"
        }
      )
    },
    { label: "Creative Expression" }
  ),
  communication: fields.object(
    {
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      photos: fields.array(captionedPhoto("about"), {
        label: "Photos",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      }),
      items: fields.array(
        fields.object({
          icon: iconSelect(beyondIcons, "mun"),
          title: fields.text({ label: "Title" }),
          body: fields.text({ label: "Body", multiline: true })
        }),
        {
          label: "Items",
          itemLabel: (props) => props.fields.title.value || "Item"
        }
      )
    },
    { label: "Communication Skills" }
  ),
  stem: fields.object(
    {
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      kicker: fields.text({ label: "Kicker" }),
      body: fields.text({ label: "Body", multiline: true }),
      tracks: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          steps: fields.array(
            fields.object({
              grades: fields.text({ label: "Grades" }),
              text: fields.text({ label: "Text" })
            }),
            {
              label: "Steps",
              itemLabel: (props) => props.fields.grades.value || "Step"
            }
          )
        }),
        {
          label: "Tracks",
          itemLabel: (props) => props.fields.title.value || "Track"
        }
      ),
      photos: fields.array(captionedPhoto(), {
        label: "Photos",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      })
    },
    { label: "STEM" }
  ),
  programmes: fields.array(
    fields.object({
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede (optional)" }),
      body: fields.text({ label: "Body", multiline: true }),
      image: cmsImage("Image", "home/curriculum"),
      imageAlt: fields.text({ label: "Alt text" }),
      tone: fields.select({
        label: "Style",
        options: [...programmeTones],
        defaultValue: "plain"
      })
    }),
    {
      label: "Programmes",
      itemLabel: (props) => props.fields.title.value || "Programme"
    }
  ),
  trips: fields.object(
    {
      title: fields.text({ label: "Title" }),
      lede: fields.text({ label: "Lede" }),
      body: fields.text({ label: "Body", multiline: true }),
      photos: fields.array(captionedPhoto(), {
        label: "Photos",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      })
    },
    { label: "Field Trips" }
  )
};

export const newsSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      kicker: fields.text({ label: "Kicker" }),
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis. Line breaks are kept."
      }),
      lede: fields.text({ label: "Lede" }),
      image: cmsImage("Banner image", "news"),
      imageAlt: fields.text({ label: "Alt text" }),
      fit: fields.select({
        label: "Image fit",
        description: "Cover fills the banner. Contain shows the full image without cropping.",
        options: [...imageFit],
        defaultValue: "cover"
      })
    },
    { label: "Hero" }
  ),
  tabs: fields.object(
    {
      resultLabel: fields.text({ label: "Result tab" }),
      achievementLabel: fields.text({ label: "Achievements tab" }),
      eventLabel: fields.text({ label: "Events tab" }),
      resultEmpty: fields.text({ label: "Result empty message", multiline: true }),
      achievementEmpty: fields.text({ label: "Achievements empty message", multiline: true }),
      eventEmpty: fields.text({ label: "Events empty message", multiline: true })
    },
    { label: "Tabs" }
  ),
  results: fields.array(
    fields.object({
      kicker: fields.text({
        label: "Kicker",
        description: "Small label above the title, e.g. ICSE 2025-26."
      }),
      title: fields.text({ label: "Title" }),
      body: fields.text({
        label: "Body",
        multiline: true,
        description: "Card shows the first paragraph. Full text appears in the popup."
      }),
      photos: fields.array(photo("news/results"), {
        label: "Photos",
        description: "First photo is the card image. Up to 5 photos appear in the popup.",
        itemLabel: (props) => props.fields.alt.value || "Photo",
        validation: { length: { max: 5 } }
      })
    }),
    {
      label: "Result cards",
      itemLabel: (props) => props.fields.title.value || "Result"
    }
  ),
  achievements: fields.array(
    fields.object({
      kicker: fields.text({
        label: "Kicker",
        description: "Small label above the title, e.g. Student Achievements."
      }),
      title: fields.text({ label: "Title" }),
      body: fields.text({
        label: "Body",
        multiline: true,
        description: "Card shows the first paragraph. Full text appears in the popup."
      }),
      photos: fields.array(photo("news/achievements"), {
        label: "Photos",
        description: "First photo is the card image. Up to 5 photos appear in the popup.",
        itemLabel: (props) => props.fields.alt.value || "Photo",
        validation: { length: { max: 5 } }
      })
    }),
    {
      label: "Achievement cards",
      itemLabel: (props) => props.fields.title.value || "Achievement"
    }
  ),
  events: fields.array(
    fields.object({
      day: fields.text({ label: "Day", description: "e.g. 12" }),
      month: fields.text({ label: "Month", description: "e.g. Jan" }),
      title: fields.text({ label: "Title" }),
      text: fields.text({
        label: "Summary",
        multiline: true,
        description: "Shown on the Event card when there is no longer story."
      }),
      body: fields.text({
        label: "Popup story",
        multiline: true,
        description: "Full text in the popup. Leave blank to use the summary."
      }),
      photos: fields.array(photo("news/events"), {
        label: "Photos",
        description: "Shown in a slider above the story. The first photo is the card image.",
        itemLabel: (props) => props.fields.alt.value || "Photo",
        validation: { length: { max: 5 } }
      })
    }),
    {
      label: "Event cards",
      itemLabel: (props) => props.fields.title.value || "Event"
    }
  )
};

const facilityIcons = [
  { label: "Smart board", value: "board" },
  { label: "Furniture", value: "furniture" },
  { label: "Bright room", value: "bright" },
  { label: "Computers", value: "computers" },
  { label: "Internet", value: "internet" },
  { label: "Software", value: "software" },
  { label: "Hands-on", value: "handsOn" },
  { label: "Equipment", value: "equipment" },
  { label: "Experiment", value: "experiment" },
  { label: "Safety", value: "safety" },
  { label: "Curriculum", value: "curriculum" },
  { label: "LEGO", value: "lego" },
  { label: "Sensors", value: "sensors" },
  { label: "Project", value: "project" },
  { label: "Innovation", value: "innovation" },
  { label: "Books", value: "books" },
  { label: "Digital", value: "digital" },
  { label: "Reading", value: "reading" },
  { label: "Research", value: "research" },
  { label: "Seating", value: "seating" },
  { label: "Audio-visual", value: "av" },
  { label: "Stage", value: "stage" },
  { label: "Events", value: "events" },
  { label: "Transport", value: "transport" },
  { label: "Bus", value: "bus" },
  { label: "GPS", value: "gps" },
  { label: "Driver", value: "driver" },
  { label: "Shield", value: "shield" },
  { label: "Day care", value: "daycare" },
  { label: "Secure", value: "secure" },
  { label: "Caregivers", value: "caregivers" },
  { label: "Activities", value: "activities" },
  { label: "Play", value: "play" },
  { label: "Infirmary", value: "infirmary" },
  { label: "First aid", value: "firstaid" },
  { label: "Emergency", value: "emergency" },
  { label: "Wellbeing", value: "wellbeing" }
] as const;

function spaceFeatures() {
  return fields.array(
    fields.object({
      icon: iconSelect(facilityIcons, "board"),
      label: fields.text({ label: "Label" })
    }),
    {
      label: "Features",
      itemLabel: (props) => props.fields.label.value || "Feature"
    }
  );
}

export const campusSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis."
      }),
      lede: fields.text({ label: "Lede" }),
      image: cmsImage("Image"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  spaces: fields.array(
    fields.object({
      id: fields.text({ label: "Section id (anchor)" }),
      title: fields.text({ label: "Title" }),
      tagline: fields.text({ label: "Tagline" }),
      body: fields.text({ label: "Body", multiline: true }),
      reverse: fields.checkbox({ label: "Reverse layout" }),
      image: photo(),
      gallery: fields.array(captionedPhoto(), {
        label: "Gallery (optional)",
        itemLabel: (props) => props.fields.caption.value || props.fields.alt.value || "Photo"
      }),
      features: spaceFeatures()
    }),
    {
      label: "Campus spaces",
      itemLabel: (props) => props.fields.title.value || "Space"
    }
  )
};

export const facilitiesSchema = {
  metaTitle: fields.text({ label: "Page title (browser tab)" }),
  metaDescription: fields.text({ label: "Page description", multiline: true }),
  hero: fields.object(
    {
      title: fields.text({
        label: "Title",
        multiline: true,
        description: "Use *asterisks* for emphasis."
      }),
      lede: fields.text({ label: "Lede" }),
      image: cmsImage("Image"),
      imageAlt: fields.text({ label: "Alt text" })
    },
    { label: "Hero" }
  ),
  spaces: fields.array(
    fields.object({
      id: fields.text({ label: "Section id (anchor)" }),
      title: fields.text({ label: "Title" }),
      tagline: fields.text({ label: "Tagline" }),
      body: fields.text({ label: "Body", multiline: true }),
      tone: fields.select({
        label: "Band colour",
        options: [
          { label: "Default", value: "default" },
          { label: "Pink", value: "pink" }
        ],
        defaultValue: "default"
      }),
      reverse: fields.checkbox({ label: "Reverse layout" }),
      leadIcon: iconSelect(facilityIcons, "transport"),
      image: photo(),
      features: spaceFeatures()
    }),
    {
      label: "Facilities",
      itemLabel: (props) => props.fields.title.value || "Facility"
    }
  )
};
