import {
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql'
import { Observer } from './Observer'
import { Location } from './Location'

const BeaconPurpose = new GraphQLEnumType({
  name: 'BeaconPurpose',
  values: {
    LOCATION: {value: 'location_beacon'},
    PROXIMITY: {value: 'proximity_beacon'}
  }
})

export const Beacon = new GraphQLObjectType({
  name: 'Beacon',
  description: 'A single beacon.',
  fields: () => ({
    battery_level: {type: GraphQLFloat},
    cal_pwr: {type: GraphQLFloat},
    can_upgrade: {type: GraphQLBoolean},
    dwas_enable: {type: GraphQLBoolean},
    dwas_state: {type: GraphQLString},
    enter_campaigns: {type: new GraphQLList(GraphQLString)},
    exit_campaigns: {type: new GraphQLList(GraphQLString)},
    firmware_a_version: {type: GraphQLString},
    firmware_b_version: {type: GraphQLString},
    host: {type: GraphQLString},
    hw_type: {type: GraphQLString},
    local_apb: {type: GraphQLBoolean},
    location: {
      type: Location,
      resolve: async ({ location }, args, context) => {
        if (location) {
          const key = JSON.stringify({ id: location })
          const results = await context.loader.locations.load(key)
          return results
        }
        else return null
      },
    },
    major: {type: GraphQLFloat},
    managed: {type: GraphQLBoolean},
    map: {type: GraphQLID},
    max_satisfying_firmware_link: {type: GraphQLString},
    max_satisfying_firmware_version: {type: GraphQLString},
    minor: {type: GraphQLFloat},
    name: {type: GraphQLString},
    observer: {
      type: Observer,
      resolve: async ({ observer, location }, args, context) => {
        if (observer) {
          const key = JSON.stringify({ observer, location })
          const results = await context.loader.observers.load(key)
          return results
        }
        else return null
      }
    },
    rssi: {type: GraphQLFloat},
    timestamp: {type: GraphQLFloat},
    txpower: {type: GraphQLFloat},
    uuid: {type: GraphQLID},
    x: {type: GraphQLFloat},
    y: {type: GraphQLFloat},
    created: {type: GraphQLString},
    mac: {type: GraphQLID},
    modified: {type: GraphQLString},
    type: {type: BeaconPurpose}
  })
})

