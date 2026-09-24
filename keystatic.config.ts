import { collection, config, fields, singleton } from "@keystatic/core";
import {
  aboutSchema,
  beyondBooksSchema,
  campusSchema,
  facilitiesSchema,
  highSchoolSchema,
  homeSchema,
  kindergartenSchema,
  middleSchoolSchema,
  newsSchema,
  primarySchema
} from "./keystatic.schema";

export const showAdminUI = true;

const isDev = process.env.NODE_ENV !== "production";

export default config({
  storage: {
    kind: isDev ? "local" : "cloud"
  },
  cloud: {
    project: "praveen/lawrence-academy"
  },
  collections: {
    posts: collection({
      label: "News · Stories",
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
          multiline: true,
          description: "Used on Result and Event cards when this story is listed."
        }),
        category: fields.select({
          label: "Category",
          description:
            "Result and Event stories can appear on those tabs. Achievements are edited on News · Page.",
          options: [
            { label: "Result", value: "result" },
            { label: "Achievement", value: "achievement" },
            { label: "Event", value: "event" }
          ],
          defaultValue: "result"
        }),
        content: fields.markdoc({ label: "Content" })
      }
    })
  },
  singletons: {
    home: singleton({
      label: "Home",
      path: "content/pages/home",
      schema: homeSchema
    }),
    about: singleton({
      label: "About · About Us",
      path: "content/pages/about",
      schema: aboutSchema
    }),
    campus: singleton({
      label: "About · Campus",
      path: "content/pages/campus",
      schema: campusSchema
    }),
    facilities: singleton({
      label: "About · Facilities",
      path: "content/pages/facilities",
      schema: facilitiesSchema
    }),
    kindergarten: singleton({
      label: "Academics · Kindergarten",
      path: "content/pages/kindergarten",
      schema: kindergartenSchema
    }),
    primary: singleton({
      label: "Academics · Primary",
      path: "content/pages/primary",
      schema: primarySchema
    }),
    middleSchool: singleton({
      label: "Academics · Middle School",
      path: "content/pages/middle-school",
      schema: middleSchoolSchema
    }),
    highSchool: singleton({
      label: "Academics · High School",
      path: "content/pages/high-school",
      schema: highSchoolSchema
    }),
    beyondBooks: singleton({
      label: "Beyond Books",
      path: "content/pages/beyond-books",
      schema: beyondBooksSchema
    }),
    news: singleton({
      label: "News · Page",
      path: "content/pages/news",
      schema: newsSchema
    })
  }
});
