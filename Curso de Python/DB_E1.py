"""
En este ejercicio tendréis que crear una tabla llamada Alumnos que constará de tres columnas:
la columna id de tipo entero, la columna nombre que será de tipo texto y la columna apellido que también será de tipo texto.

Una vez creada la tabla, tenéis que insertarle datos, como mínimo tenéis que insertar 8 alumnos a la tabla.

Por último, tienes que realizar una búsqueda de un alumno por nombre y mostrar los datos por consola.

"""


import sqlite3

con = sqlite3.connect("DBE1.db")
cur = con.cursor()
BuscarDatos = input("Ingresa la identificacion del estudiante = ")

res = cur.execute(f'select *from alumnos where id = {BuscarDatos}')
#Para que muestre los datos es necesario que los recorra
for datos in res:
    print(datos)
cur.close()
con.close()

