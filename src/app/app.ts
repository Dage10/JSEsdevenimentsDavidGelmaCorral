import {Component, HostListener, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('JSEsdevenimentsDavidGelmaCorral');

  cadena = ''
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
}
