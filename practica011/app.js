const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
var tittle = "esto es un titulo en una variable";
app.get('/',(req, res)=>{
    res.render('home',{
        tittle,
        name: "Juan Olvera"
    });
});
app.get('/render',(req, res)=>{
    res.render('home',{
        tittle: "aquí cambia la cosa",
        name: "Lo ves"
    });
});


let server = app.listen(port, ()=>{
    console.log(`Servidor corriendo en ${server.address().port}`);
});