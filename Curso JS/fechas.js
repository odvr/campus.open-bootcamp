//- La fecha de hoy

const fechaActual = new Date ()

console.log(fechaActual)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const FechaNacimiento = new Date(1998, 09, 21) ;

const CompararFechas = (fechaActual.getTime()== FechaNacimiento.getTime());
console.log(CompararFechas);
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const MesDeNacimiento = FechaNacimiento.getMonth();
//Una variable que contenga el día de tu nacimiento
const DiaNacimiento = FechaNacimiento.getDate();
// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const AnioNacimiento = FechaNacimiento.getFullYear();
console.log(AnioNacimiento)


//console.log(moonLanding.getMonth())