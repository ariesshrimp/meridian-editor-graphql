import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import { Beacon } from './Beacon'
import { Organization } from './Organization'

const Theme = new GraphQLObjectType({
  name: 'Theme',
  description: 'Chosen theme of the app.',
  fields: () => ({
    inner_style: {type: GraphQLString},
    logo_url: {type: GraphQLString},
    map_style: {type: GraphQLString},
    outer_style: {type: GraphQLString},
    primary_color: {type: GraphQLString},
    secondary_color: {type: GraphQLString},
    title_color: {type: GraphQLString}
  })
})

export const Location = new GraphQLObjectType({
  name: 'Location',
  description: 'A particular location for an Organization. For example, Portland Downtown Office location of Aruba.',
  fields: () => ({
    account_type: {type: GraphQLString},
    address: {type: GraphQLString},
    app_level: {type: GraphQLFloat},
    appviewer_version: {type: GraphQLString},
    beacons: {
      type: new GraphQLList(Beacon),
      args: {
        count: {name: 'count', type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve: async (location, { count = 100 }, context) => {
        const key = JSON.stringify({ location: location.id, count })
        const results = await context.loader.beacons.load(key)
        return results
      }
    },
    created: {type: GraphQLString},
    default_language: {type: GraphQLString},
    domain: {type: GraphQLString},
    expiration_date: {type: GraphQLString},
    features: {type: GraphQLString},
    id: {type: GraphQLID},
    is_locked: {type: GraphQLBoolean},
    is_published: {type: GraphQLBoolean},
    is_queued: {type: GraphQLBoolean},
    languages: {type: GraphQLString},
    latitude: {type: GraphQLString},
    location_beacon_uuid: {type: GraphQLString},
    location: {type: GraphQLString},
    longitude: {type: GraphQLString},
    minimum_step_distance: {type: GraphQLFloat},
    modified: {type: GraphQLString},
    name: {type: GraphQLString},
    namespace: {type: GraphQLString},
    organization: {type: Organization},
    phone: {type: GraphQLString},
    proximity_beacon_uuid: {type: GraphQLString},
    radius: {type: GraphQLFloat},
    rtls_campus_id: {type: GraphQLString},
    rtls_id: {type: GraphQLString},
    rtls_ssid: {type: GraphQLString},
    search_examples: {type: new GraphQLList(GraphQLString)},
    theme: {type: Theme},
    timezone: {type: GraphQLString}
  })
})
