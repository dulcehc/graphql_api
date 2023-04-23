
const { ApolloServer } = require('apollo-server')

const { resolvers } = require('./resolvers')
const { typeDefs } = require('./schema')

const port = process.env.API_PORT || 9090;

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
