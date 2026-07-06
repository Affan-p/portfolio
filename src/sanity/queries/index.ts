import { defineQuery } from "groq"

export const SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    heroRole,
    heroLocation,
    heroFirstName,
    heroLastName,
    heroMantra,
    navLinks[] { label, href },
    overviewHeadline,
    overviewBody1,
    overviewBody2,
    overviewItems[],
    socialLinks[] { label, href },
    band1[],
    band2[]
  }
`)

export const EXPERIENCES_QUERY = defineQuery(`
  *[_type == "experience"] | order(order asc){
    company,
    role,
    period,
    description,
    tags[]
  }
`)

export const SKILL_ROWS_QUERY = defineQuery(`
  *[_type == "skillRow"] | order(order asc){
    label,
    items[]
  }
`)
