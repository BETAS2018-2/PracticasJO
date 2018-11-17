const express  = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const port = 3000;
let pass = "$2b$10$yJApbDMNN6xw3ok6nSCB9ODxNIlZyDNCwvwe4sbLjk0y9ZykMNuya";

app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res)=>{
    res.sendFile('index.html');
});

app.get('/get/password/:pass', (req, res)=>{
    let password = bcrypt.hashSync(req.params.pass, 10);
    console.log(password);
    res.json({ password });
});

app.get('/get/comprobacion/:pass',(req, res)=>{
    let passin = req.params.pass;
    let comp = bcrypt.compareSync(passin, pass);


if(!comp){
    return res.status(401).json({
        status: 0,
        msg: 'Acceso denegado'
    });
}
let token = jwt.sign({
    data: {
        username : "tony09",
        email: "anbanano@gmail.com"
    }
}, 'secret-juan-tony',{ expiresIn: '1h'});
return res.status(401).json({
    status: 1,
    token
});
});








app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
});