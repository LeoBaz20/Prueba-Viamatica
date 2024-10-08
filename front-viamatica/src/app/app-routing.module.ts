import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
import { AsignarSalaComponent } from './asignar-sala/asignar-sala.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'asignar-salas', component: AsignarSalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
