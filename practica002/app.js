let alumnos = [
    {
        id: 1,
        nombre: "Miguel",
        call: 10,        
    },
    {
        id: 2,
        nombre: "Antonio",
        cal: 5
    },
    {
        id: 3,
        nombre: "Juan",
        cal: 3
    }
];


let getCalificacion = (id, callback) =>{
    let calificacion = alumnos.find((calificaciones) =>{
        return calificaciones.id === id;
    });
    if(!calificacion){
        callback(`la calificación con el id ${id} no ha sido encontrada`, null);
    }else{
        callback(null,calificacion);
    }
    
}

getCalificacion(4,(err, calificacion)=>{
    if (err) return console.log(err);
    console.log(calificacion);
});

