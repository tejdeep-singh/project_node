const express = require('express');
const server = express();
const port = 3200;
server.get('/', function (request, response) {
    response.send('HELLO WORLD');
});

server.get('/users', function (request, response) {
    response.send('HELLO USERS');
});

server.get('/users/images', function (request, response) {
    response.send('HELLO USERS');
});

server.listen(port);