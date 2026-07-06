import { CodeIcon } from "@sanity/icons"
import { defineType, defineField } from "sanity"

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.unique(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      description: "Optional link to the project",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }),
  ],
  orderings: [
    {
      title: "Manual Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "role" },
  },
})
