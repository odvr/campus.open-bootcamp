"""
En este segundo ejercicio, tendréis que crear un archivo py y dentro crearéis una clase Vehículo,

haréis un objeto de ella, lo guardaréis en un archivo y luego lo cargamos.

"""
import pickle
import time
class Vehiculo():
    Ahora = time.localtime()
    ahora = time.strftime("%a, %d %b %Y %H:%M:%S +0000")
    print(ahora)
    def __int__(self,ahora):
        self.ahora = ahora

    def getLaHora(self):
        return self.ahora

LaHoraes = Vehiculo()

"""
la siguiente linea permite guardar los datos en un arcchivo 
wb{escribe datos y los guarda de forma binaria}
"""
def GuardaBin():
    f = open("Guardar_la_Hora.bin", 'wb')
    pickle.dump(LaHoraes, f)
    f.close()
def AbreBin():
    f = open("Guardar_la_Hora.bin", 'rb')
    Abre=pickle.load(f)
    f.close()
    print(Abre)
print(AbreBin())