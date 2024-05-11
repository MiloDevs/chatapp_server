const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('message', (message) => {
        console.log('Message received: ', message);
        io.emit('message', message);
    });
});


server.listen(3001, () => {
    console.log('Server started on port 3001');
});

