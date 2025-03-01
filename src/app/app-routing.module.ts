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
      { path: "clientes/create", component: TenicoCreateComponent },
      { path: "clientes/update/:id", component: TecnicoUpadateComponent },
      { path: "clientes/delete/:id", component: TecnicoDeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
