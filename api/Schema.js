import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { Location } from './Location'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      location: {
        type: Location,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (root, args, context, info) => {
          const data = await context.loader.location.load(args.id)
          return data
        }
      }
    }
  })
})
