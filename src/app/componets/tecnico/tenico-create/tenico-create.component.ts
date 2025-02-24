import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tenico-create',
  templateUrl: './tenico-create.component.html',
  styleUrls: ['./tenico-create.component.css']
})
export class TenicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.required]);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, [Validators.minLength(6), Validators.required]);
  
  constructor(
    private service: TecnicoService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void { }

  create(): void{
    this.service.create(this.tecnico).subscribe(() =>{
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
    }, ex => {
      console.log(ex);
    });
  }

  addPerfil(perfil: any): void{
    if(this.tecnico.perfis.includes(perfil)){
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    }else{
      this.tecnico.perfis.push(perfil);
    }
  }

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

}
