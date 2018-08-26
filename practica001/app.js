



console.log("primer paso");
console.log("Inicia función");


let m1 = setTimeout(()=>{
    console.log("Espera uno");
},2000);

let m2 = setTimeout(()=>{
    console.log("espera 2");
},4000);

let fin = console.log("Listo");

let showMensajes = async ()=>{
    var uno = await m1;    
    uno = await m2(mensaje2);            
}








