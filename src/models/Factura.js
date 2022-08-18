class Factura {

    constructor(codigo,cliente,descripcion,items){
        this.codigo = codigo;
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.items = items;
    }

    calcularTotal() {
        let element = 0;
        for (let index = 0; index < this.items.length; index++) {
             element += this.items[index];
            
        }
        return element;
    }

}

const remito = {
    codiguito:0,
    cliente:'',
    descripcion:'',
    items:'',
}
export {Factura,remito};