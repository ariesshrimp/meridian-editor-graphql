location: {
  args: {
    locationID: {
      description: 'Unique ID for the location. For example: "5099328771194880"',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (_, { locationID }) => {
    const {data} = await API.get(`/locations/${locationID}`)
    console.log(data)
    return data
  },
  type: Location
}

const Location = new GraphQLObjectType({
  name: 'Location',
  description: 'A particular location for an Organization. For example, Portland Downtown Office location of Aruba.',
  fields: () => ({
    modified: {type: GraphQLString},
    created: {type: GraphQLString},
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    domain: {type: GraphQLString},
    org: {type: GraphQLString},
    // users: {type: GraphQLString},
    // features: {type: GraphQLString},
    namespace: {type: GraphQLString},
    location: {type: GraphQLString},
    latitude: {type: GraphQLString},
    longitude: {type: GraphQLString},
    phone: {type: GraphQLString},
    address: {type: GraphQLString},
    radius: {type: GraphQLFloat},
    // search_examples: {type: GraphQLString},
    // timezone: {type: choice},
    appviewer_version: {type: GraphQLString},
    app_level: {type: GraphQLFloat},
    // account_type: {type: choice},
    is_published: {type: GraphQLBoolean},
    expiration_date: {type: GraphQLString},
    is_locked: {type: GraphQLBoolean},
    rtls_id: {type: GraphQLString},
    rtls_campus_id: {type: GraphQLString},
    rtls_ssid: {type: GraphQLString},
    minimum_step_distance: {type: GraphQLFloat},
    default_language: {type: GraphQLString},
    // languages: {type: GraphQLString},
    location_beacon_uuid: {type: GraphQLString},
    proximity_beacon_uuid: {type: GraphQLString},
    // theme: {type: ThemeSerializer},
    is_queued: {type: GraphQLBoolean}
  })
})



const Beacon = new GraphQLObjectType({
  name: 'Beacon',
  description: 'API response containing a list of beacons assigned to a given location.',
  fields: () => ({
    moified: {type: GraphQLString},
    created: {type: GraphQLString},
    mac: {type: GraphQLString},
    type: {type: GraphQLString},
    map: {type: GraphQLString},
    x: {type: GraphQLFloat},
    y: {type: GraphQLFloat},
    major: {type: GraphQLFloat},
    minor: {type: GraphQLFloat},
    uuid: {type: GraphQLString},
    name: {type: GraphQLString},
    firmware_a_version: {type: GraphQLString},
    firmware_b_version: {type: GraphQLString},
    rssi: {type: GraphQLString},
    battery_level: {type: GraphQLFloat},
    txpower: {type: GraphQLString},
    hw_type: {type: GraphQLString},
    cal_pwr: {type: GraphQLString},
    dwas_enable: {type: GraphQLString},
    dwas_state: {type: GraphQLString},
    local_apb: {type: GraphQLBoolean},
    timestamp: {type: GraphQLString},
    host: {type: GraphQLString},
    observer: {type: GraphQLString},
    managed: {type: GraphQLBoolean},
    location: {type: GraphQLString},
    can_upgrade: {type: GraphQLBoolean},
    max_satisfying_firmware_version: {type: GraphQLString},
    max_satisfying_firmware_link: {type: GraphQLString},
    enter_campaigns: {type: new GraphQLList(GraphQLString)},
    exit_campaigns: {
      type: new GraphQLList(GraphQLString)
    }
  })
})

const BeaconListResolver = async (_, { locationID }) => {
  try {
    const { results } = await API.get(`/locations/${locationID}/beacons`)
    return results
  } catch (error) {
    console.error(error)
    return null
  }
}


import axios from 'axios'

const API = {
  get: async (path) => await axios.get(`http://localhost:8091/api${path}`),
  post: async (path) => await axios.post(`http://localhost:8091/api${path}`)
}
