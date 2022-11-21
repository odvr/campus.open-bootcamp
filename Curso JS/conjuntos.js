//let familiares = new set ('omar','jose','ledys','Gina')

const familiares  = new Set(['omar','jose','ledys','Gina'])


//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
let AgregarFamiliar = familiares.add('omar')

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
let AgregarFamiliarN = familiares.add('Javascript')
console.log(familiares)