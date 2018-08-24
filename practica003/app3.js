let express = require('express');
let app = express();

app.get(`/`, (req, res)=>{
    res.send("Hola mundo express");
});

app.get(`/`, (req, res)=>{
   let nombre = req.params.nombre;
   res.send(`Hola ${nombre} Bienvenido` );
});
