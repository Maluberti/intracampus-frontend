import { Component } from '@angular/core';

@Component({
  selector: 'app-form-create-atleta',
  templateUrl: './form-create-atleta.component.html',
  styleUrls: ['./form-create-atleta.component.scss']
})
export class FormCreateAtletaComponent {
  numeroDigitado: number | undefined ;
  hide = true;

  somenteNumeros(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
