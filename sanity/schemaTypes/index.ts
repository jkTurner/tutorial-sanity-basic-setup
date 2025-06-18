import { type SchemaTypeDefinition } from 'sanity'
import { post } from './posts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
