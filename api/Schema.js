import axios from 'axios'
import {
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

/**
 * Syncronous In-Memory Example
 */
const joe = {name: 'joe', id: '1235'} // dummy user
const User = new GraphQLObjectType({
  name: 'User',
  description: 'User creator',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString), description: 'The id of the user.'},
    name: {type: GraphQLString, description: 'The name of the user.'}
  })
})

/**
 * ASYNC Fetch Example
 */
const rootURL = 'https://jsonplaceholder.typicode.com'
const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'Post creator',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString), description: 'Id of post'},
    userId: {type: new GraphQLNonNull(GraphQLString), description: 'Id of author'},
    title: {type: GraphQLString, description: 'Title of post'},
    body: {type: GraphQLString, description: 'Body of post'}
  })
})

/**
 * Actual API Data Exapmle
 */
const API_BASE_URL = 'http://localhost:8091/api'
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
const Location = new GraphQLObjectType({
  name: 'Location',
  description: 'A particular location for an Organization. For example, Portland Downtown Office location of Aruba.',
  fields: () => ({
    modified: {type: GraphQLString},
    created: {type: GraphQLString},
    id: {type: GraphQLString},
    name: {type: new GraphQLNonNull(GraphQLString)},
    domain: {type: GraphQLString},
    org: {type: new GraphQLNonNull(GraphQLString)},
    users: {type: new GraphQLList(User)},
    features: {type: GraphQLString},
    namespace: {type: GraphQLString},
    location: {type: GraphQLString},
    latitude: {type: GraphQLString},
    longitude: {type: GraphQLString},
    phone: {type: GraphQLString},
    address: {type: GraphQLString},
    radius: {type: GraphQLFloat},
    search_examples: {type: new GraphQLList(GraphQLString)},
    timezone: {type: GraphQLString},
    appviewer_version: {type: GraphQLString},
    app_level: {type: GraphQLFloat},
    account_type: {type: GraphQLString},
    is_published: {type: GraphQLBoolean},
    expiration_date: {type: GraphQLString},
    is_locked: {type: GraphQLBoolean},
    rtls_id: {type: GraphQLString},
    rtls_campus_id: {type: GraphQLString},
    rtls_ssid: {type: GraphQLString},
    minimum_step_distance: {type: GraphQLFloat},
    default_language: {type: GraphQLString},
    languages: {type: GraphQLString},
    location_beacon_uuid: {type: GraphQLString},
    proximity_beacon_uuid: {type: GraphQLString},
    theme: {type: Theme},
    is_queued: {type: GraphQLBoolean}
  })
})

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: User,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLString)}
        },
        resolve: (root, {id}) => joe
      },
      post: {
        type: Post,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLString)}
        },
        resolve: async (root, {id}) => {
          const { data } = await axios.get(`${rootURL}/posts/${id}`)
          return data
        }
      },
      location: {
        type: Location,
        args: {
          id: {name: 'id', type: new GraphQLNonNull(GraphQLString)}
        },
        resolve: async (root, {id}) => {
          const { data } = await axios.get(`${API_BASE_URL}/locations/${id}`)
          return data
        }
      }
    }
  })
})
