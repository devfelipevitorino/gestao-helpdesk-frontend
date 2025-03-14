import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componets/nav/nav.component';
import { HomeComponent } from './componets/home/home.component';
import { TecnicoListComponent } from './componets/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './componets/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TenicoCreateComponent } from './componets/tecnico/tenico-create/tenico-create.component';
import { TecnicoUpadateComponent } from './componets/tecnico/tecnico-upadate/tecnico-upadate.component';
import { TecnicoDeleteComponent } from './componets/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './componets/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './componets/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './componets/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './componets/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './componets/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './componets/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './componets/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './componets/chamado/chamado-read/chamado-read.component';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  { 
    path: "", component: NavComponent,canActivate:[AuthGuard], children:[
      { path: "home", component: HomeComponent },

      { path: "tecnicos", component: TecnicoListComponent },
      { path: "tecnicos/create", component: TenicoCreateComponent },
      { path: "tecnicos/update/:id", component: TecnicoUpadateComponent },
      { path: "tecnicos/delete/:id", component: TecnicoDeleteComponent },

      { path: "clientes", component: ClienteListComponent },
      { path: "clientes/create", component: ClienteCreateComponent },
      { path: "clientes/update/:id", component: ClienteUpdateComponent },
      { path: "clientes/delete/:id", component: ClienteDeleteComponent },

      { path: "chamados", component: ChamadoListComponent },
      { path: "chamados/create", component: ChamadoCreateComponent },
      { path: "chamados/update/:id", component: ChamadoUpdateComponent },
      { path: "chamados/read/:id", component: ChamadoReadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
