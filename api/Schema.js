
import {
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
 * User Type Shit
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
// const rootURL = 'https://jsonplaceholder.typicode.com'
// const firstPost = {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
// }
// const Post = new GraphQLObjectType({
//   name: 'Post',
//   description: 'Post creator',
//   fields: () => ({
//     id: {type: GraphQLNonNull(GraphQLString), description: 'Id of post'},
//     userId: {type: GraphQLNonNull(GraphQLString), description: 'Id of author'},
//     title: {type: GraphQLString, description: 'Title of post'},
//     body: {type: GraphQLString, description: 'Body of post'}
//   })
// })

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
      }
    }
    // post: {
    //   type: Post,
    //   args: {
    //     id: {name: 'id', type: new GraphQLNonNull(GraphQLString)}
    //   },
    //   resolve: (root, {id}) => firstPost
    // }
  })
})
