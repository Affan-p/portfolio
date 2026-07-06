import { StackCompactIcon } from "@sanity/icons"
import { defineType, defineField } from "sanity"

export const skillRow = defineType({
  name: "skillRow",
  title: "Skill Row",
  type: "document",
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.min(1),
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
    select: { title: "label" },
  },
})
