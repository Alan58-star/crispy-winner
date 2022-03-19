import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes:Array<Pasaje>;

  constructor() {
    this.pasajes=new Array<Pasaje>();
   }
  addPasaje(pasaje:Pasaje){
    pasaje.idPasaje=this.getIdDisponible();
    this.pasajes.push(pasaje);
  }
  getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for ( var i = 0; i < this.pasajes.length;i++){
    if(maxid < this.pasajes[i].idPasaje){
        maxid = this.pasajes[i].idPasaje;
      }
    };
    return (maxid + 1);
  }
  getPasajes(){
    return this.pasajes;
  }
  updatePasaje(pasaje:Pasaje){
    return pasaje;
  }
  deletePasaje(pasaje:Pasaje){
    this.pasajes=this.pasajes.filter(x=> x != pasaje);
  }

}
