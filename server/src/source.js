const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {resolvers, typeDefs} = require('./schema');
require('dotenv').config({ path: '../.env' });

const cors = require('cors');
const path = require('path');

async function init_server() {
    const app = express();
    const port = process.env.PORT || 5000;
    const server = new ApolloServer({typeDefs, resolvers})

    const corsOptions = { // come back to this
        origin: ''
    }

    app.use(cors(corsOptions));
    app.use(express.static('public'));
  
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    })

    await server.start()

    server.applyMiddleware({ app, path:'/graphql' })

    app.listen(port, () => console.log(`server running on port: ${port}`))
}


module.exports = { init_server };