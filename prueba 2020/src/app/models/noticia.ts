export class Noticia {
    codigo:number;
    titulo:string;
    texto:string;
    imagen:string;

    constructor(codigo?:number, titulo?:string,texto?:string, imagen?:string)
    {
        this.codigo=codigo;
        this.titulo=titulo;
        this.texto=texto;
        this.imagen=imagen;

    }
}
