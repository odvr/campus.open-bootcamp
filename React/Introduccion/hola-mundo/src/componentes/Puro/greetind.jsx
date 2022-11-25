import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetind extends Component {

constructor(props){
    super(props);
    // no se puede cambiar 
    this.state = {

        edad : 24
    }

}

    render() {
        return (
            <div>
            <h1>Hola {this.props.name}</h1>
            <h2>Tu edad es {this.state.edad}</h2>
            
            <div>
              <button onClick={this.cumple}>
                Cumplir Anios
              </button>  
            </div>
            

            
            
            </div>
                    );
    }

    cumple = () =>{
        //Generar un nuevo estado y actualizar la vista
        this.setState((EstadoPrevio) =>(
        //Crear un objeto
        {
            edad: EstadoPrevio.edad +1



            }
        )


        )
    }
}


Greetind.propTypes = {

    //Especificar el Nombre que sea String (Tipado)las comas son importantes
    name: PropTypes.string,

};


export default Greetind;
