public class MiClase {
    //Crear variables las privadas edad, nombre y telefono de la clase Persona.
    private int edad;
    private String nombre;
    private int telefono;


    //Crear un objeto persona en el main.

    //Crear gets y sets Edad.
    public void setEdad(int t){
        edad =t;
    }
    public  int getEdad(){
        return edad;
    }
    //Crear gets y sets Nombre.
    public void setNombre(String N){
        nombre =N;
    }
    public  String getNombre(){
        return nombre;
    }
    //Crear gets y sets telefono.
    public void setTelefono(int T){
        telefono =T;
    }
    public  int getTelefono(){
        return telefono;
    }


}
class VerDatosq {
    public static void main(String[] arg){
        MiClase datos = new MiClase();
        datos.setEdad(24);
        datos.setNombre("Omar David Vega");
        datos.setTelefono(3232825);
        System.out.println("Tu edad es  "+ datos.getEdad());
        System.out.println("Te llamas  " + datos.getNombre());
        System.out.println("Tu Telefono es " + datos.getTelefono());

    }
}