"""
En este segundo ejercicios tendréis que crear un script que nos diga si es la hora de ir a casa.
 Tendréis que hacer uso del modulo time. Necesitaréis la fecha del sistema y poder comprobar la hora.

En el caso de que sean más de las 7, se mostrará un mensaje y en caso contrario, haréis una operación para calcular
 el tiempo que queda de trabajo.

"""
import time

def TiempoTrabajado():
    #[3] representa la posición donde se encuentra la hora en la tupla
    HoraActual =  time.localtime()[3]
    if HoraActual > time.strptime("19:00"[:2],"%H")[3]  or HoraActual < time.strptime("08:00"[:2],"%H")[3]:
        print("Fin de la Jornada")
    else:
        restante = time.strptime("19:00"[:2], "%H")[3] - HoraActual
        print(f"El tiempo restante de trabajo es:  {restante} hora/s")


print(TiempoTrabajado())