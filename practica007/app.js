const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application/json'})

    res.write(JSON.stringify({"TONY":"HOLA"}));
    //console.log(JSON.stringify(req, undefined,2));
    console.log(req,headers);
    res.end();
}).listen(3000, (err)=>{
    console.log("Server listening on port 3000");
})