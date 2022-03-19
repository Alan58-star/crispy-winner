import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  //Arrays
  palabras: Array<String>;
  opciones: Array<String>;
  respuestas: Array<number>;



  //variables
  palabra: String;
  opcion: String
  indiceWord: number;
  indiceOption: number;
  indiceRespuesta: number;
  respuesta: number;
  puntaje:number;
  contador:number;
  imagen:string;
  //bools
  
  win:boolean;
  cambio:boolean;

  constructor() {
    this.palabras = ["Manzana", "Banana", "hola", "mentiroso", "sol", "Mario", "archivo", "teclado", "perro", "saltar"];
    this.opciones = ["vocales", "silabas", "consonantes", "letras"];
    
    this.start();


  }
  start()
  {
    this.respuestas = [0, 0, 0, 0];

    this.indiceWord = Math.floor(Math.random() * 10);
    this.indiceOption = Math.floor(Math.random() * 4);
    this.opcion = this.opciones[this.indiceOption];
    this.palabra = this.palabras[this.indiceWord];
    this.definirRespuesta();
    this.cargarRespuestas();
    this.respuestas = this.respuestas.sort(function () { return Math.random() - 0.5 });
    this.puntaje=0;
    this.contador=0;
    this.win=true;
    this.cambio=false;
    
      if(this.puntaje==0||this.puntaje==1)
      {
        this.imagen="mal.jpg";
      }
      else if(this.puntaje==2||this.puntaje==3)
      {
        this.imagen="bien.jpg";
      }
      else{
        this.imagen="excelente.png";
      }
    
    
    
  }
  game(num:Number)
  {
    if(num!=this.respuesta)
    {
      this.win=false;
      this.cambio=true;
      
    }
    else
    {
      this.win=true;
      this.cambio=true;
      this.puntaje++;
    }
    
  }
  next() {
    this.indiceWord = Math.floor(Math.random() * 10);
    this.indiceOption = Math.floor(Math.random() * 4);
    this.opcion = this.opciones[this.indiceOption];
    this.palabra = this.palabras[this.indiceWord];
    this.cambio=false;
    this.definirRespuesta();
    this.cargarRespuestas();
    this.respuestas = this.respuestas.sort(function () { return Math.random() - 0.5 });
    this.contador++;
    if(this.puntaje==0||this.puntaje==1)
      {
        this.imagen="mal.jpg";
      }
      else if(this.puntaje==2||this.puntaje==3)
      {
        this.imagen="bien.jpg";
      }
      else{
        this.imagen="excelente.png";
      }
    
    
  }

  cargarRespuestas() {
    let aux;
    this.respuestas[0] = this.respuesta;
    aux=this.respuesta+Math.floor(Math.random()*3)+1;

    this.respuestas[1] = aux;
    if(this.respuesta==1)
    {
      
      aux=this.respuesta-1;
    }
    else{
      aux=this.respuesta-(Math.floor(Math.random()*(2-1))+1);
    
    }
    this.respuestas[2] = aux;
    aux=this.respuesta+Math.floor(Math.random()*6)+4;
    this.respuestas[3]=aux;
    

  }

  definirRespuesta() {
    switch (this.indiceOption + 1) {
      case 1:
        this.respuesta = this.contarVocales();
        break;
      case 2:
        this.respuesta = this.contarSilabas(this.palabra);
        break;
      case 3:
        this.respuesta = this.contarConsonantes();
        break;
      case 4:
        this.respuesta = this.contarLetras();
        break;

    }
  }
  contarVocales(): number { return this.palabra.match(/[aeiou]/gi).length;}
  contarConsonantes(): number {return this.palabra.match(/[bcdfghjklmnñpqrstuvwxyz]/gi).length;}
  contarLetras(): number {return this.palabra.length;}
  contarSilabas(palabra: String): number {
    palabra = palabra.toLowerCase();
    if (palabra.length <= 3) { return 1; }
    palabra = palabra.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
    palabra = palabra.replace(/^y/, "");
    return palabra.match(/[aeiouy]{1,2}/g).length;
  }
  ngOnInit(): void {
  }

}
