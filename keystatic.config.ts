import { collection, config, fields } from "@keystatic/core";

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
  }
});
