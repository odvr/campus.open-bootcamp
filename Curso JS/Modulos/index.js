/*
- En el entrypoint index.js, importa el módulo controller.js

- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde

*/


import { suma, multiplica} from "./controller.js";
import chalk from 'chalk';

let resultadoSuma = suma(1,2);
let resultadoMultiplica = multiplica(1,2);



console.log(chalk.blue(resultadoSuma));
console.log(chalk.blue("Hola"));


console.log(resultadoMultiplica)