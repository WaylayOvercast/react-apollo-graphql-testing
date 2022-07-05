const { server, port } = require('./src/source');

server.listen({ port }, () => {
    console.log(`server running on port: ${port}`)
})
