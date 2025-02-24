import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-tenico-create',
  templateUrl: './tenico-create.component.html',
  styleUrls: ['./tenico-create.component.css']
})
export class TenicoCreateComponent implements OnInit {
  nome: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.required]);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, [Validators.minLength(6), Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }
}
