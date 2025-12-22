import {Component, HostListener, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule,
    MatNativeDateModule, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('JSEsdevenimentsDavidGelmaCorral');

  cadena = ''
  comptador = 0
  nom = ''
  cognoms = ''
  data = ''
  comptador_data = 0
  spinnerColor: 'primary' | 'accent' | 'warn' = 'warn';
  ngOnInit(){
    document.body.style.backgroundColor = 'green'
  }
  canviarColor(nouColor:string){
    document.body.style.backgroundColor = nouColor
  }

  @HostListener('window:keydown', ['$event'])
  acumularTeclas(event: KeyboardEvent){
    this.cadena += event.key.toUpperCase()
  }

  incrementarComptador(){
    this.comptador++
  }

  reiniciarComptador(){
    this.comptador = 0
  }

  enviarFormulari(){
    console.log(this.nom+""+this.cognoms)
  }

  cambiarColorInput(){
    this.comptador_data++
    let element = document.getElementById("inputData")
    if(this.comptador_data > 1){
      element!.style.color = "blue"
    }
  }

  canviarSpinnerColor(){
    this.spinnerColor = 'accent';
  }
}
