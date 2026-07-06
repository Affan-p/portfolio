import { TiersIcon } from "@sanity/icons"
import { defineType, defineField } from "sanity"

export const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  icon: TiersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Certificate Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "issuer",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      type: "string",
      description: 'e.g. "Mar 2024"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "credId",
      title: "Credential ID",
      type: "string",
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
      title: "Date",
      name: "date",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Manual Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "issuer" },
  },
})
