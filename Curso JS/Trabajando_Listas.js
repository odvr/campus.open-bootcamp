/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)


*/


let compras = ["arroz", "fideos","huevos","atun","cafe"]

//Modifica la lista de la compra y añádele "Aceite de Girasol"
let NuevoProducto = (compras.push("Aceite de Girasol"))
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
let EliminarProducto = (compras.pop())

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)



var peliculas = [
    {

    titulo1: 'Black Adam',
    director1: 'Jaume Collet-Serra',
    fecha1: 2022-10-19
},
    {
    titulo2: 'La captura del enfermero',
    director2: 'Tim Travers Hawkins',
    fecha2: 2022-11-11,
    },
{
    titulo3: 'Minions y sus amigos: Volumen 2 ',
    director3: 'Tim Travers Hawkins',
    fecha3: 2022-11-08

}
];

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

console.log(peliculasNuevas)


const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]