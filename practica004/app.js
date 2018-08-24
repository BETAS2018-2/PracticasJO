//console.log(process.argv[2]);
//console.log(ms);

var ms = process.argv[2];
ms = ms.split("-ms=")[1];
console.log(`Hola ${ms}`);
