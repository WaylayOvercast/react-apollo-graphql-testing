const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./schema');

const port = process.env.PORT || 5000
const server = new ApolloServer({resolvers, typeDefs})

module.exports = { server, port }