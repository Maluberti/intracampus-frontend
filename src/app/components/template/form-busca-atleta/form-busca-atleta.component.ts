import { Component } from '@angular/core';

@Component({
  selector: 'app-form-busca-atleta',
  templateUrl: './form-busca-atleta.component.html',
  styleUrls: ['./form-busca-atleta.component.scss']
})
export class FormBuscaAtletaComponent {

  numeroDigitado: number | undefined ;

  somenteNumeros(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
