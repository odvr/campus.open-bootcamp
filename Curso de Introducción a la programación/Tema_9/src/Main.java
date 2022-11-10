public class Main {
    public static void main(String[] args) {

        persona per =new persona();
        cliente  clientes = new cliente();
        trabajador trabajado =new trabajador();

        clientes.nombre = "Omar David Vega";
        clientes.Edad =24;
        clientes.telefono = 32328;
        clientes.credito = 2033;
        trabajado.salario=1500;
        trabajado.nombre ="Jose Alfredo";
        trabajado.Edad =23;
        System.out.println("Mi nombre es "+clientes.nombre+" Mi edad es "+clientes.Edad+"Mi celular es "+clientes.telefono+"Tengo un credito de "+clientes.credito
                +"Mi salario es de "+trabajado.salario);

    }

}
/*
Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono
 */
class persona {
  // Variables
     int Edad;
     String nombre;
     int telefono;
    /*
    / Funcion para imprimir los parametros

      public static void Datos(int edad, String nombre, int telefono){
        System.out.println("Tu Edad"+ edad);
        System.out.println("Tu Nombre"+ nombre);
        System.out.println("Tu Telefono"+ telefono);

    }
     */


}

/*
crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
 */
class cliente extends  persona{
    double credito;


}

class trabajador extends cliente{

    int salario;
}