import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import path from 'path';
import apiRouter from './routes/api.js';
import gameSockets from './sockets/gameSockets.js';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);


app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use('/api', apiRouter);

io.on('connection', (socket) => {
    console.log('user connected');
    gameSockets(socket, io);
})

server.listen(3000, ()=>{
    console.log('listening on port:3000');
})