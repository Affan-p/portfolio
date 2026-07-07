import { CaseIcon } from "@sanity/icons"
import { defineType, defineField } from "sanity"

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "company",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g. "2023 — Present"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
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
    select: { title: "company", subtitle: "role" },
  },
})
