import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeliculasService } from '../services/peliculas.service';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ActualizarPeliculaComponent } from './actualizar-pelicula/actualizar-pelicula.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  displayedColumns: string[] = ['id','nombre','duracion', 'acciones'];

  constructor(private peliculaService: PeliculasService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe(
      (data: any[]) => {
        this.peliculas = data;
      },
      (error) => {
        console.error('Error al cargar las películas:', error);
      }
    );
  }

  agregarPelicula(): void {
    const dialogRef = this.dialog.open(AgregarPeliculaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarPeliculas(); // Recarga la lista de películas si se ha añadido una nueva
      }
    });
  }

  modificarPelicula(pelicula: any): void {
    const dialogRef = this.dialog.open(ActualizarPeliculaComponent, {
      data: { id: pelicula.id_pelicula, nombre: pelicula.nombre, duracion: pelicula.duracion }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarPeliculas(); // Recargar la lista de películas si se ha modificado alguna
      }
    });
  }
}
