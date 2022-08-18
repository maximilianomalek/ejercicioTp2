import {Factura,remito} from './models/Factura.js';
//import factura from './models/facturaObj.js';

const miFactura = new Factura(1,200,"Venta",['pato','niato']);
remito.cliente = 10;
console.log(miFactura);
console.log(remito);


/*
Pruebas unitarias
*/