import {Component, HostListener, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('JSEsdevenimentsDavidGelmaCorral');

  cadena = ''
  comptador = 0
  nom = ''
  cognoms = ''
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
}
