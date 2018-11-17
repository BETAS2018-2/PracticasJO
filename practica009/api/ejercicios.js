module.exports = (app)=>{
    app.get('/numero/:num',(req,res)=>{
        let n = req.params.num;
        var c = 0;
        if(n>0){
           for(var i = 1;i<n;i++){
               if(n%i == 0){
                   c++;
               }
           }
           if(c == 1){
               res.json({numero : n, res: "Es primo"});
           }else{
            res.json({n : n, res: "No es primo"});
           }
        }else{
            res.json({n : n, res: "Error en el número"});
        }
        
    })

    app.get('/fecha/:dd/:mm/:yyyy', (req, res)=>{
       let fechaHoy = new Date();
       var dias = fechaHoy.getDate()-req.params.dd;
       if(dias<0){
           dias *= -1;
       }
       var meses = (fechaHoy.getMonth()+1)-req.params.mm;
       if(meses<0){
           meses *= -1;
       }
       var annio = fechaHoy.getFullYear()-req.params.yyyy;
       if(annio<0){
           annio *= -1;
       }
       
       res.send(
           {
               Dias : dias,
               Meses : meses,
               Annio : annio
           });
   
   });
}