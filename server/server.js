const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const apiRouter = require('./routes/api');
const gameSockets = require('./sockets/gameSockets');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', apiRouter);

io.on('connection', (socket) => {
    console.log('user connected');
    gameSockets(socket, io);
})

server.listen(3000, ()=>{
    console.log('listening on port:3000');
})