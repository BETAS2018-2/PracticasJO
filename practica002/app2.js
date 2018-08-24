let alumnos = [
    {
        id: 1,
        nombre: "Miguel",
        call: 10, 
        mat: 5       
    },
    {
        id: 2,
        nombre: "Antonio",
        cal: 5,
        mat: 9
    },
    {
        id: 3,
        nombre: "Juan",
        cal: 3,
        mat: 0
    }
];

let getMaterias = (mater,callback) =>{
    let alumno = alumnos.find((materias)=>{
        return materias.mat === mater;
    });
    if(!alumno){
        callback(`no hay alumno cursando ${mater} materias`,null);
    }else{
        callback(null,alumno.nombre);
    }
}

getMaterias(5,(err,nombreAlumno)=>{
    if(err) return console.log(err);
    console.log(nombreAlumno);
})

