import { collection, config, fields, singleton } from "@keystatic/core";

const homeImage = (label: string, folder: string) =>
  fields.image({
    label,
    directory: `public/images/home/${folder}`,
    publicPath: `/images/home/${folder}/`
  });

export const showAdminUI = true;

export default config({
  storage: {
    kind: "cloud"
  },
  cloud: {
    project: "praveen/lawrence-academy"
  },
  collections: {
    posts: collection({
      label: "News",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Date",
          validation: { isRequired: true }
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true
        }),
        content: fields.markdoc({ label: "Content" })
      }
    })
  },
  singletons: {
    home: singleton({
      label: "Home",
      path: "content/pages/home",
      schema: {
        heroLearnMoreLabel: fields.text({ label: "Hero button label" }),
        heroLearnMoreHref: fields.text({ label: "Hero button link" }),
        heroSlides: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            text: fields.text({ label: "Text", multiline: true }),
            image: homeImage("Image", "hero"),
            alt: fields.text({ label: "Alt text" })
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
            extra: fields.text({ label: "Extra line (optional)" }),
            image: homeImage("Image", "pathway"),
            position: fields.text({
              label: "Image focus (CSS object-position)",
              description: 'Example: center 30%'
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
      }
    })
  }
});
