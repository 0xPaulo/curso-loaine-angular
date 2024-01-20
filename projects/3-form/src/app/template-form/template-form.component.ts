import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  usuario: any = {
    nome: null,
    email: null,
  };
  onSubmit(_t5: NgForm) {
    console.log(_t5.value);
    console.log(this.usuario);
  }
}
