"""

En este segundo ejercicio, tenéis que crear una aplicación que obtendrá los elementos
impares de una lista pasada por parámetro con filter y realizará una suma de todos estos elementos obtenidos
mediante reduce.
"""
from functools import reduce

def ej2(lista):
    resultado = list(filter((lambda x: x % 2), lista))
    print(resultado)
    resultado = reduce( (lambda x, y: x + y), resultado)
    print(resultado)

lista = list(range(100))

ej2(lista)