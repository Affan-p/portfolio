import { type SchemaTypeDefinition } from "sanity"

import { settings } from "./documents/settings"
import { experience } from "./documents/experience"
import { project } from "./documents/project"
import { skillRow } from "./documents/skillRow"
import { certificate } from "./documents/certificate"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, experience, project, skillRow, certificate],
}
