console.log('test');

// llamar a funciones que testean


//Testeo
//Comparar un resultado esperado, contra uno obtenido
//1- Caso de prueba
//Camino feliz


//2- Casos alternativos
import {Factura} from "../src/models/Factura.js";

const pruebita = new Factura(1,200,"Venta",['pato','niato']);
console.log(pruebita);
pruebita.items = [12,34,12];


const esperado = 58;
if (esperado == pruebita.calcularTotal()) {
    console.log('Dado una lista de items, retorna 58');
}else{
    console.log('Dado una lista de items vacio, retorna error');
}