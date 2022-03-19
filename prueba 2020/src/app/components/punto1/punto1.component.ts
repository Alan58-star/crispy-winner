import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  not:Noticia;
  noticias:Array<Noticia>;
  indice:number=0;
  constructor() { 
    this.noticias=new Array<Noticia>();
    this.noticias.push(new Noticia(1,"Entró a una vivienda de Coronel Arias, robó una notebook y la vendió",
    "Un sujeto de 22 años fue capturado por agentes de la Policía luego de que vendiera la notebook que sustrajo de una vivienda ubicada en el barrio Coronel Arias de la capital jujeña.",
    "noticia1.jpg"));
    this.noticias.push(new Noticia(1,"Fake news: es falso que regirá desde el miércoles la circulación por DNI en Jujuy"
    ,"Es falsa la información que circula por redes sociales y grupos de WhatsApp que indica que a partir del miércoles regirá en la provincia de Jujuy la circulación de acuerdo a la terminación del DNI."
    ,"noticia2.jpg")); 
    this.noticias.push(new Noticia(1,"Un caso sorprendente: una mujer quedó embarazada estando embarazada",
    "Rebecca Roberts, de 39 años, y Rhys Weaver, de 43, son protagonistas de una historia casi única en el mundo. Es que este matrimonio vivió uno de los fenómenos más extraños que pueden darse en el embarazo, que es la superfetación, es decir, que ella quedó embarazada ya estándolo de otro bebé, algo que sucedió -según un estudio publicado en 2008- en menos de diez casos en el mundo."
    ,"noticia3.jpg")); 
    this.Iniciar();
  }
  Iniciar():void
  {
    if(this.indice < this.noticias.length){
      this.not = this.noticias[this.indice];
    }
  }
  Siguiente():void{
    if(this.indice < this.noticias.length-1){
      this.indice = this.indice+1;
      this.not = this.noticias[this.indice];
    }    
    else{
      this.indice=0;
      this.not=this.noticias[this.indice];
    }
  }
  Anterior():void{
    if(this.indice > 0){
      this.indice = this.indice-1;
      this.not = this.noticias[this.indice];
    } 
    else{
      this.indice=this.noticias.length-1;
      this.not=this.noticias[this.indice];
    }
  }

  ngOnInit(): void {
  }

}
