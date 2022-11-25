
/*
const htexto = document.getElementById("hola")

console.log(htexto)

htexto.addEventListener("Cambiar Texto", evento =>{
    console.log(evento)
})

function cambiarTexto (nuevoTexto, color){
    const evento = new CustomEvent("cambiarTexto",{detail:{
        texto: nuevoTexto,
        color 
    }})
    htexto.dispatchEvent(evento)
}
*/
///funciona para que identifique que la pagina este totalmente cargada 
console.log("JS")
$(()=>{
    
    $(".btn-1").click(()=>{
        console.log("Oculto")
        $("h1").hide()
    

    })
    $(".btn-2").click(()=>{
        console.log("Ver")
        $("h1").show()
    })
   
    
})



//$()