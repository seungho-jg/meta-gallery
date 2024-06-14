export default function(socket, io){
    socket.on('move', (data) => {
        socket.broadcast.emit('move', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
};