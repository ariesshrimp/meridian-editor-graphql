'use strict'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import Schema from '../api/Schema'
import express from 'express'
import { json } from 'body-parser'

import Loader from './Loader'

const PORT = 4000
const server = express()
const URL = `http://localhost:${PORT}/graphiql`

server.use(`/graphiql`, json(), graphiqlExpress({
  endpointURL: `/graphql`
}))

server.use(`/graphql`, json(), graphqlExpress(request => ({
  schema: Schema,
  context: { loader: Loader() }
})))

server.listen(PORT, () => {
  console.log(`Server started at ${(new Date()).toString()}
Visit ${URL} in a browser.`)
})

export default server
