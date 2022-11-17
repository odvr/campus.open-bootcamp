"""
En este ejercicio tendréis que crear una tabla llamada Alumnos que constará de tres columnas:
la columna id de tipo entero, la columna nombre que será de tipo texto y la columna apellido que también será de tipo texto.

Una vez creada la tabla, tenéis que insertarle datos, como mínimo tenéis que insertar 8 alumnos a la tabla.

Por último, tienes que realizar una búsqueda de un alumno por nombre y mostrar los datos por consola.

"""


import sqlite3

con = sqlite3.connect("DBE1.db")
cur = con.cursor()
IngresarId = input("Ingresa el ID del estudiante = ")
IngresarNombre = input("Ingresa el Nombre del estudiante = ")
IngresarApellido = input("Ingresa el Nombre del estudiante = ")
BuscarDatos = input("Ingresa la identificacion del estudiante = ")

res = cur.execute(f'select *from alumnos where id = {BuscarDatos}')
Ingresa = cur.execute(f'INSERT INTO alumnos(id,nombre,apellido)values({IngresarId},{IngresarNombre},{IngresarApellido})')
print(Ingresa)
#Para que muestre los datos es necesario que los recorra
for datos in res:
    print(datos)
cur.close()
con.close()

