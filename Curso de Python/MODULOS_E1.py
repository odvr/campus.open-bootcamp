"""
En este ejercicio tendréis que crear un módulo que contenga las operaciones básicas de una calculadora:
sumar, restar, multiplicar y dividir.
Este módulo lo importaréis a un archivo python y llamaréis a las funciones creadas.
Los resultados tenéis que mostrarlos por consola.
"""
import Operaciones.SRMD as o
import pprint
restar =o.reta(5,1)
sumar = o.suma(5,1)
dividir = o.divicion(6,2)
multiplicar =o.multiplicacion(6,2)

pprint.pprint("Resta {} Suma {} Divicio {} Multiplicacion {}".format(restar,sumar,dividir,multiplicar))



