import { type SchemaTypeDefinition } from "sanity"

import { settings } from "./documents/settings"
import { experience } from "./documents/experience"
import { skillRow } from "./documents/skillRow"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, experience, skillRow],
}
