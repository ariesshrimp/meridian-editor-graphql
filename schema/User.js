import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID
} from 'graphql'

const  UserPurpose = new GraphQLEnumType({
  name: 'UserPurpose',
  values: {
    ADMIN: {value: 'admin'},
    API: {value: 'api'},
    BEACONS_CONTROLLER: {value: 'beacons_controller'},
    EDITOR: {value: 'editor'},
    SHARING: {value: 'sharing'}
  }
})

export const User = new GraphQLObjectType({
  name: 'User',
  description: 'A single user.',
  fields: () => ({
    "accepted_tos": {type: GraphQLBoolean},
    "access_token": {type: GraphQLString},
    "confirmed": {type: GraphQLBoolean},
    "email": {type: GraphQLString},
    "first": {type: GraphQLString},
    "full_name": {type: GraphQLString},
    "id": {type: GraphQLID},
    "last": {type: GraphQLString},
    "password_reset_token": {type: GraphQLString},
    "type": {type: UserPurpose}
  })
})

