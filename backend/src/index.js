// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import cors from 'cors'
import gql from 'graphql-tag'

const port = process.env.PORT || 4000
const host = process.env.HOST || 'http://localhost:'
const endpoint = '/api'
const app = express()
const httpServer = http.createServer(app)

let notes = [
  {
    id: '1',
    content: 'This is the 1st note in our "notework"',
    author: 'Terence Hamilton',
  },
  { id: '2', content: 'This is the next note', author: 'Some Author' },
  { id: '3', content: 'Yet another note!', author: 'Another Author' },
]

const typeDefs = gql`
  #graphql
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    notes: () => notes,
    note: (parent, args) => {
      return notes.find((note) => note.id === args.id)
    },
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Terence Hamilton',
      }
      notes.push(noteValue)
      return noteValue
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(endpoint, cors(), express.json(), expressMiddleware(server))

app.listen(port, () =>
  console.log(`🚀 Server ready at ${host}${port}${endpoint}`)
)
