const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

async function startApolloServer() {
  const prisma = new PrismaClient({
    errorFormat: 'minimal'
  })

  const resolvers = {
    Query,
    Mutation
  }

  const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
    resolvers,
    context: {
      prisma
    }
  })
  await server.start()

  const app = express()
  app.use('/static', express.static(path.join(__dirname, '../public')))
  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  return { server, app }
}

startApolloServer()
