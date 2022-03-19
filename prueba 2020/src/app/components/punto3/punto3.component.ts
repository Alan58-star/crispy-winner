import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>
  band = true;
  contJ: number=0;
  contA: number=0;
  contM: number=0;
  montJ: number=0;
  montA: number=0;
  montM: number=0;
  montoTotal: number=0;
  mostrar = true;

  constructor(private pasajeService: PasajeService) {
    this.pasaje = new Pasaje();
   
  }
  public enviarPasaje() {

    this.pasaje.fechaCompra = new Date();
    this.pasaje.precioPasaje = this.cambio();

    if (this.band == true) {
      this.pasajeService.addPasaje(this.pasaje);
      this.sumarMonto();
    }
    this.sumarMonto();
    this.pasaje = new Pasaje();
    this.showPasajes();
    this.band = true;


  }
  public sumarMonto() {
    this.contJ=0;
    this.montJ=0;
    this.contA=0;
    this.montA=0;
    this.contM=0;
    this.montM=0;
    this.montoTotal=0;
    for(let i=0;i<this.pasajeService.getPasajes().length;i++)
    {
      if (this.pasajeService.getPasajes()[i].categoriaPasajero == "jubilado") {
        this.contJ++;
        this.montJ = this.montJ + this.pasajeService.getPasajes()[i].precioPasaje;
      }
      else if (this.pasajeService.getPasajes()[i].categoriaPasajero == "menor") {
        this.contM++;
        this.montM = this.montM + this.pasajeService.getPasajes()[i].precioPasaje;
      }
      else if (this.pasajeService.getPasajes()[i].categoriaPasajero == "adulto") {
        this.contA++;
        this.montA = this.montA + this.pasajeService.getPasajes()[i].precioPasaje;
      }
    
    
    }
    this.montoTotal = this.montoTotal + this.montA + this.montJ + this.montM;
        
    
  }
  public cambio(): number {
    let aux = 0;
    let pf: number;

    if (this.pasaje.categoriaPasajero == "menor") {
      aux = (this.pasaje.precioPasaje * 25) / 100;
      pf = this.pasaje.precioPasaje - aux;
    }
    else if (this.pasaje.categoriaPasajero == "jubilado") {
      aux = (this.pasaje.precioPasaje * 50) / 100;
      pf = this.pasaje.precioPasaje - aux;
    }
    else {
      pf = this.pasaje.precioPasaje;
    }

    return pf;


  }
  public modificarPasaje(pass: Pasaje) {
    this.pasaje = this.pasajeService.updatePasaje(pass);
    this.band = false;
  }
  public delete(pass: Pasaje) {
    if(confirm("¿Esta seguro de eliminar este pasaje?"))
    {
    this.pasajeService.deletePasaje(pass);
    this.showPasajes();
    this.sumarMonto();
    this.pasaje = new Pasaje();
  }
  }
  public showPasajes() {
    this.pasajes = this.pasajeService.getPasajes();
  }

  ngOnInit(): void {
  }

}
