const express = require('express');
const app = express();
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 3000;
const publicPth = path.resolve(__dirname + "/public");

let server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPth));

io.on('connection',(client)=>{
    console.log('Alguien se ha conectado');

    client.on('mensajeNuevo',(data, callback)=>{
        console.log(data);
        //callback("Mensaje enviado");

        client.broadcast.emit('mensajeNuevo', {
            usuario: data.usuario,
            mensaje: data.mensaje,
            color: data.color
        })
        callback(data);
    });
    /* ------------------- */
    client.on('usuarioNuevo',(data)=>{
        client.broadcast.emit('usuarioNuevo',{
            usuario: "Servidor",
            mensaje: `${data.usuario}: se ha unido`
        });
    });
    client.on('escribiendo',(data)=>{
        client.broadcast.emit('escribiendo',{
            usuario: data.usuario
        });
        
    });
});

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

