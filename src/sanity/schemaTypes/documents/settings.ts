import { CogIcon } from "@sanity/icons"
import { defineType, defineField } from "sanity"

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { title: "Hero", name: "hero" },
    { title: "Overview", name: "overview" },
    { title: "Bands", name: "bands" },
  ],
  fields: [
    defineField({
      name: "heroRole",
      title: "Role / Tagline",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroLocation",
      title: "Location",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroFirstName",
      title: "First Name",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroLastName",
      title: "Last Name",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroMantra",
      title: "Mantra",
      type: "string",
      group: "hero",
    }),

    defineField({
      name: "overviewHeadline",
      title: "Overview Headline",
      type: "text",
      rows: 3,
      group: "overview",
    }),
    defineField({
      name: "overviewBody1",
      title: "Overview Body (Paragraph 1)",
      type: "text",
      rows: 4,
      group: "overview",
    }),
    defineField({
      name: "overviewBody2",
      title: "Overview Body (Paragraph 2)",
      type: "text",
      rows: 4,
      group: "overview",
    }),
    defineField({
      name: "overviewItems",
      title: "Overview Items",
      type: "array",
      group: "overview",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "band1",
      title: "Hero Band 1",
      type: "array",
      group: "bands",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "band2",
      title: "Hero Band 2",
      type: "array",
      group: "bands",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" }
    },
  },
})
