

let suma = (a,b) =>{
    return new Promise((resolve, reject)=>{
        if(!Number(a)){
            reject("No es un número");
        }else{
            resolve(a+b);
        }
    });
}

let resta = async (a, b) => {
    return a - b;
}

//console.log(resta(10, 9));
// suma(1,2)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     consolo.log(err);
// })

let operacion = async (a,b) =>{
    var res = await suma(a , b);
    console.log(res);
    res = await resta(res, a);
    console.log(res);
}

operacion(10,10);

