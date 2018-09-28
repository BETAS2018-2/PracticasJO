module.exports = (app)=>{
    app.get('/numero/:num',(req,res)=>{
        var n = req.params.num;
        var c = 0;
        if(n>0){
           for(var i = 1;i<n;i++){
               if(n%i == 0){
                   c++;
               }
           }
           if(c == 1){
               res.json({$n : "primo"});
           }else{
            res.json({$n : "no primo"});
           }
        }else{
            res.json({$n : "Error"});
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
       var años = fechaHoy.getFullYear()-req.params.yyyy;
       if(años<0){
           años *= -1;
       }
       
       res.send(
           {
               Días : dias,
               Meses : meses,
               Años : años
           });
   
   });
}