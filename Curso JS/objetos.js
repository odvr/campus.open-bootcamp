//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const DatosPersonales = 
    {
        nombre : "Omar David",
        apellido : "Vega Rodriguez",
        edad : 24,
        altura : 1.80,
        eresDesarrollador : true
    }

    //Una variable que obtenga tu edad a partir del objeto anterior
    let Datos = DatosPersonales.edad 
//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
    {
        ...Datos
    },{
        nombre: "Gina ",
        apellido: "Bernal",
        edad: 23,
        altura: 150,
        eresDesarrollador: false
    },{
        nombre: "Jose",
        apellido: "Vega",
        edad: 23,
        altura: 185,
        eresDesarrollador: true
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
  