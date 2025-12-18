import {Component, HostListener, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('JSEsdevenimentsDavidGelmaCorral');

  cadena = ''
  comptador = 0
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


}
