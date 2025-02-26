import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componets/nav/nav.component';
import { HomeComponent } from './componets/home/home.component';
import { TecnicoListComponent } from './componets/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './componets/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TenicoCreateComponent } from './componets/tecnico/tenico-create/tenico-create.component';
import { TecnicoUpadateComponent } from './componets/tecnico/tecnico-upadate/tecnico-upadate.component';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  { 
    path: "", component: NavComponent,canActivate:[AuthGuard], children:[
      { path: "home", component: HomeComponent },

      { path: "tecnicos", component: TecnicoListComponent },
      { path: "tecnicos/create", component: TenicoCreateComponent },
      { path: "tecnicos/update/:id", component: TecnicoUpadateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
