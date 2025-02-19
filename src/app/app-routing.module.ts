import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componets/nav/nav.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  { path: "", component: NavComponent, children:[
      { path: "home", component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
