const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

server.use(express.static('public'));

server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}) 

module.exports = { server, port };