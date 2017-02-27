import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import express from 'express'
import { json } from 'body-parser'

import Schema from '../schema'
import Loader from '../data-loader'

const PORT = 4000
const server = express()
const URL = `http://localhost:${PORT}/graphiql`

server.use(`/graphiql`, json(), graphiqlExpress({
  endpointURL: `/graphql`,
  query: `query ($mainLocation: ID!, $someBeacon: ID!, $someUser: ID!) {
  location(id:$mainLocation) {
    name
    id
    beacons(count:2) {
      location {
        name
        id
      }
      mac
      type
      observer {
        id
        location
      }
    }
  }
  beacon(location: $mainLocation, id: $someBeacon) {
    mac
    location {
      id
    }
  }
  users(count:2) {
    id
    type
  }
  user(id:$someUser) {
    id
    type
  }
}`,
  variables: {
    mainLocation: "5099328771194880",
    someBeacon: "8C417D717EFB",
    someUser: "5629499534213120"
  }
}))

server.use(`/graphql`, json(), graphqlExpress(request => ({
  schema: Schema,
  context: { loader: Loader() }
})))

server.listen(PORT, () => {
  console.log(`
  Server started at ${(new Date()).toString()}
  --
  Visit ${URL} in a browser.
  `)
})

export default server
