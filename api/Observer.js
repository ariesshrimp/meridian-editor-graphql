import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID
} from 'graphql'

export const Observer = new GraphQLObjectType({
  name: 'Observer',
  description: 'A single observer.',
  fields: () => ({
    apb_firmware_version: {type: GraphQLString},
    apb_hw_type: {type: GraphQLString},
    apb_mac: {type: GraphQLString},
    count: {type: GraphQLFloat},
    hw_type: {type: GraphQLString},
    id: {type: GraphQLID},
    ipv4_addr: {type: GraphQLString},
    ipv6_addr: {type: GraphQLString},
    location: {type: GraphQLID},
    mac: {type: GraphQLID},
    os: {type: GraphQLString},
    software_build: {type: GraphQLString},
    software_version_label: {type: GraphQLString},
    software_version: {type: GraphQLString},
    timestamp: {type: GraphQLString},
    type: {type: GraphQLString}
  })
})

