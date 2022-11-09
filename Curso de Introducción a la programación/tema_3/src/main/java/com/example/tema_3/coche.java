package com.example.tema_3;

public class coche {

    static int Npuertas = 4;

    static void incrementar_puertas(int agregarPuertas) {
        int incrementar = (agregarPuertas + Npuertas);
        System.out.println("Sumaste una puerta mas =" + incrementar);

    }

    public static void coche(String[] args) {
        incrementar_puertas(1);
    }
}
