function RetornaTrue() {
    return true
}


// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const PromesaTiempo = new Promise ((requiere,rechaza)=>{
    if(requiere){
    setTimeout(() => {
        console.log("Hola soy una promesa");
      }, 5000)}else{console.log("No esperaste")}
})

let ejecuta = PromesaTiempo.then(()=>(console.log(PromesaTiempo)))


//- Una función generadora de índices pares automáticos

 function* GeneraIndice() {
    let indice = 0;
    while(true){
              yield indice += 2
        }
    }



let indice = GeneraIndice()

console.log(indice.next().value)
