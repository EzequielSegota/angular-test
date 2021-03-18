import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 01 con Angular';
  edadUno='';
  edadDos='';
  resultado=0;
  CalcularPromedio(){
    this.resultado=(parseInt(this.edadUno) + parseInt(this.edadDos))/2;
  }

  LimpiarCuadros(){
    this.edadUno='';
    this.edadDos='';
  }
}
