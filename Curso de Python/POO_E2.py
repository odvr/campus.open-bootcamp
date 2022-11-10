"""
En este segundo ejercicio, tendréis que crear un programa
 que tenga una clase llamada Alumno que tenga como atributos su nombre y su nota.
 Deberéis de definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el
 resultado de la nota y si ha aprobado o no.
"""
class alumno:
    # atraibutos
    def Consulta(self,nombre,notas):
        self.nombre = nombre
        self.nota = notas
    # La siguiente función realiza la validación de la nota para el estudiante
    def CalcularNota(self):

        if self.nota >= 5 :
            print("Felicidades Pasaste")
        else:
            print("Lo lamento No pasaste")

    #Imprime los atributos de la clase
    def MostrarEnPantalla(self):
        return (print("Hola Tu nombre es "+self.nombre))

# Crear nuevos objetos
persona1 = alumno()
#Se ingresan los parametros de los atributos
persona1.Consulta("Omar Vega",5)
#llamado de las funciones
persona1.MostrarEnPantalla()
persona1.CalcularNota()

