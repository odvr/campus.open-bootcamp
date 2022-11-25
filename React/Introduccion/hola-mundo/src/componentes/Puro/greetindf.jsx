import React,{useState} from 'react';
import PropTypes from 'prop-types';


const Greetindf = (props) => {

    // El estado no existe un contructor UseStarte se importa en React,{UseState}
    //nombre de la [variable,funcionque lo ejecuta]= useState(valor que lo inicia )

    const [edad, setedad] = useState(24);

    const cumple = ()=>{
        //actualzar el State aumeta
        setedad(edad +1)
        

    }
    const cumplemenos = ()=>{
        //actualzar el State aumeta
        const disminuye = setedad(edad -1)
        if (disminuye === 1){
            
        }
        

    }
    return (
        
        <div>
            <h1>Soy una funcion {props.name}</h1>
            <h1>Tu edad es {edad}</h1>
            <button onClick={cumple}>
                Incrementa Tu Cumple
            </button>
            <button onClick={cumplemenos}>
                Disminulle Tu Cumple
            </button>
            
            
            
        </div>
    );
};


Greetindf.propTypes = {
     //Especificar el Nombre que sea String (Tipado)las comas son importantes
     name: PropTypes.string,

};


export default Greetindf;
