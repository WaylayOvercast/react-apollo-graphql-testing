const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./schema');

const server = new ApolloServer({resolvers, typeDefs});
const express = require('express');
const app = express();

server.applyMiddleware({ app });

server.use(express.static('public'));

server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const port = process.env.PORT || 5000;


module.exports = { server, port };