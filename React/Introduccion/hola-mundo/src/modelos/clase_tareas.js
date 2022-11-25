// Nombre descripcion para las tareas
// Se importan las tareas del el ojeto niveles
import { niveles } from "./niveles";

export class Tarea{
    nombre = "";
    descripcion= "";
    completada = false;
    
    nivel =niveles.NORMAL

    // Se recrea el contructor

    constructor(nombre,descripcion,completada,nivel){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completada = completada;
        this.nivel = nivel
    }


}