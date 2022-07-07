const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {resolvers, typeDefs} = require('./schema');


const cors = require('cors');
const path = require('path');

async function init_server() {
    const app = express();
    const port = process.env.PORT || 5000;
    const server = new ApolloServer({typeDefs, resolvers})

    app.use(cors());
    app.use(express.static('public'));
    
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    })

    await server.start()

    server.applyMiddleware({ app })
    app.listen(port, () => console.log(`server running on port: ${port}`))
}


module.exports = { init_server };