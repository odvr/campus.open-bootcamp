

public class Main {
    public static void main(String[] args) {
        // Variables
        int numeroIf = -1;
        int numeroWhile = 1;
        int dowhile = 3;
        String estacion = "NO";


/*
* Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
* */
        if(numeroIf < 0 ){
            System.out.println("Es un numero negativo");

        }
        else {
            System.out.println("Es un numero POSITIVO");

        }
       /*

Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
*/
        while (numeroWhile <= 3 )
        {         System.out.println(" La suma es  "+ numeroWhile ++ );     }

        do { System.out.println(" La suma es  "+ dowhile ++ );
        } while (dowhile <= 3 );
      //Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
        for(int numeroFor= 0;numeroFor <= 3; numeroFor ++ ){

            System.out.println("Valor en pantalla " + numeroFor);
        }


        //Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
        switch (estacion){
            case ( "VERANO"):
                System.out.println("Seleccionaste VERANO ");
                break;
            case ( "INVIERNO"):
                System.out.println("Seleccionaste INVIERNO ");
                break;
            case ( "PRIMAVERA"):
                System.out.println("Seleccionaste PRIMAVERA ");
                break;
            default:
                System.out.println("Ninguna seleccion  ");
        }

    }
}