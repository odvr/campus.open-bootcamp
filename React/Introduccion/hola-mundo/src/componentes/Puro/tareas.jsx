import React from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../modelos/clase_tareas';


const TareasComponente = ({tarea}) => {
    return (
        <div>
        <h2>
            Nombre : {Tarea.nombre}
        </h2>
        <h3>
            descripcion :{Tarea.descripcion}
        </h3>
            <h4>
                Nivel : {Tarea.nivel}
            </h4>
            <h5>Estado de la Tarea es : {Tarea.completada ? 'COMPLETADA':'PENDIENTE'}</h5>
        </div>
    );
};


TareasComponente.propTypes = {
    // se instacia indicando que debe pasar una tarea
tarea:PropTypes.instanceOf(Tarea)
};


export default TareasComponente;
