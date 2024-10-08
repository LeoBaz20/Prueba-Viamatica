import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { HeaderComponent } from './header/header.component';
import { AgregarPeliculaComponent } from './peliculas/agregar-pelicula/agregar-pelicula.component';
import { ActualizarPeliculaComponent } from './peliculas/actualizar-pelicula/actualizar-pelicula.component';
import { AgregarSalasComponent } from './salas/agregar-salas/agregar-salas.component';
import { ActualizarSalasComponent } from './salas/actualizar-salas/actualizar-salas.component';
import { AsignarSalaComponent } from './asignar-sala/asignar-sala.component';
import { AsignarModalComponent } from './asignar-sala/asignar-modal/asignar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PeliculasComponent,
    SalasComponent,
    DashboardCardComponent,
    HeaderComponent,
    AgregarPeliculaComponent,
    ActualizarPeliculaComponent,
    AgregarSalasComponent,
    ActualizarSalasComponent,
    AsignarSalaComponent,
    AsignarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
