import React from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../modelos/clase_tareas';
import { niveles } from '../../modelos/niveles';
import TareasComponente from '../Puro/tareas';


const ListaTareasComponente = () => {
// Cuando se declare este componente 
    const TareaPorDefecto = new Tarea("Ejemplo ", "Una tarea",false,niveles.NORMAL);
    const cambiarEstado = (id) =>{
        console.log("TODO. Cambiar estado de una tarea ")
    }
    return (
        <div>
            <div>
                Tu tarea : 

            </div>
            {/* Se llama el componente de Tarea*/}
            <TareasComponente Tarea ={TareaPorDefecto}></TareasComponente>
        </div>
    );
};
export default ListaTareasComponente;
