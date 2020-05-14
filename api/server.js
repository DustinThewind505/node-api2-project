const express = require('express');
// const router = express('../posts/router')
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h1>Ello Poppet</h1>`)
})

// server.use('api/posts', router);

module.exports = server;