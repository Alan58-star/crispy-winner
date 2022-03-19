export class Pasaje {
    idPasaje:number=0;
    dniPasajero:number;
    categoriaPasajero:string;
    precioPasaje:number=0;
    fechaCompra:Date;

    constructor(id?:number,dni?:number,categoria?:string,fecha?:Date,precio?:number)
    {
        this.idPasaje=id;
        this.dniPasajero=dni;
        this.precioPasaje=precio;
        this.categoriaPasajero=categoria;
        this.fechaCompra=fecha;
    }
}

