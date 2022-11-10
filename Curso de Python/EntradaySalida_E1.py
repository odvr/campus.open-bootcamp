"""
En este ejercicio, tendréis que crear un archivo py donde creéis un archivo txt,
 lo abráis y escribáis dentro del archivo. Para ello, tendréis que acceder dos veces al archivo creado.
"""
def CrerTxt(NombreTxt, DatosIngresar):
    f = open(NombreTxt,"w")
    for i in DatosIngresar:
        if not i.endswith('\n'):
            i += '\n'

    f.writelines(DatosIngresar)
    f.close()
Datos = ['Java\n', 'Python', 'C', 'Go', 'JavaScript', 'PHP']

CrerTxt("Entrada.txt",Datos)

