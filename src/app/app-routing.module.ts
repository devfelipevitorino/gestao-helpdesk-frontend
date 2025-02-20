import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componets/nav/nav.component';
import { HomeComponent } from './componets/home/home.component';
import { TecnicoListComponent } from './componets/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './componets/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  { 
    path: "", component: NavComponent,canActivate:[AuthGuard], children:[
      { path: "home", component: HomeComponent },
      { path: "tecnicos", component: TecnicoListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
