'use strict'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import Schema from '../api/Schema'
import express from 'express'
import { json } from 'body-parser'

const PORT = 4000
const server = express()
const URL = `http://localhost:${PORT}/graphiql`

server.use(`/graphiql`, json(), graphiqlExpress({
  endpointURL: `/graphql`
}))

server.use(`/graphql`, json(), graphqlExpress({
  schema: Schema
}))

server.listen(PORT, () => {
  console.log(`Server started at ${(new Date()).toString()}
Visit ${URL} in a browser.`)
})

export default server
