import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
} from 'graphql'

import { Location } from './Location'
import { Organization } from './Organization'
import { User } from './User'
import { Beacon } from './Beacon'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      location: {
        type: Location,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (root, { id }, context) => {
          const key = JSON.stringify({ id })
          const data = await context.loader.locations.load(key)
          return data
        }
      },
      beacon: {
        type: Beacon,
        args: {
          location: {name: 'location', type: new GraphQLNonNull(GraphQLID)},
          id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (root, { id, location }, context) => {
          const key = JSON.stringify({ id, location })
          const results = await context.loader.beacons.load(key)
          return results
        }
      },
      user: {
        type: User,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (root, { id }, context) => {
          const key = JSON.stringify({ id })
          const results = await context.loader.users.load(key)
          return results
        }
      },
      users: {
        type: new GraphQLList(User),
        args: {
          count: {name: 'count', type: new GraphQLNonNull(GraphQLFloat)}
        },
        resolve: async (root, { count = 100 }, context) => {
          const key = JSON.stringify({ count })
          const results = await context.loader.users.load(key)
          return results
        }
      },
      organizations: {
        type: new GraphQLList(Organization),
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (root, { count }, context) => {
          const key = JSON.stringify({ count })
          const data = await context.loader.organizations.load(key)
          return data
        }
      },
    }
  })
})
