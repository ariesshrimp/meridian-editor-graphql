import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql'
import R from 'ramda'

import { User } from './User'

export const Organization = new GraphQLObjectType({
  name: 'Organization',
  description: 'A single organization.',
  fields: () => ({
    android_api_key: {type: GraphQLString},
    android_app_download_url: {type: GraphQLString},
    android_package_name: {type: GraphQLString},
    app_url_prefix: {type: GraphQLString},
    cert_filename: {type: GraphQLString},
    create_account_url: {type: GraphQLString},
    created: {type: GraphQLString},
    forgot_password_url: {type: GraphQLString},
    id: {type: GraphQLID},
    inbox_count_url: {type: GraphQLString},
    inbox_url: {type: GraphQLString},
    ios_app_download_url: {type: GraphQLString},
    ios_bundle_identifier: {type: GraphQLString},
    ios_certificate_pass: {type: GraphQLString},
    is_location_sharing_enabled: {type: GraphQLBoolean},
    location_beacon_uuid: {type: GraphQLID},
    login_name_label: {type: GraphQLString},
    login_text: {type: GraphQLString},
    login_url: {type: GraphQLString},
    logout_url: {type: GraphQLString},
    modified: {type: GraphQLString},
    name: {type: GraphQLString},
    phone_number: {type: GraphQLString},
    proximity_beacon_uuid: {type: GraphQLID},
    purchase_order: {type: GraphQLString},
    sales_order: {type: GraphQLString},
    street_address: {type: GraphQLString},
    user_info_url: {type: GraphQLString},
    users: {
      type: new GraphQLList(User),
      args: {
        count: {name: 'count', type: new GraphQLNonNull(GraphQLFloat)}
      },
      resolve: async ({ users }, { count = 100 }, context) => {
        const keys = R.compose(
          R.take(count),
          R.pluck('id')
        )(users)

        const results = await context.loader.users.loadMany(users)
        return results
      }
    },
  })
})

