import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { AsignarModalComponent } from './asignar-modal/asignar-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-asignar-sala',
  templateUrl: './asignar-sala.component.html',
  styleUrls: ['./asignar-sala.component.css']
})
export class AsignarSalaComponent implements OnInit{
  peliculas: any[] = [];
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

  asignarModal(peliculaId: number): void {
    const dialogRef = this.dialog.open(AsignarModalComponent, {
      data: { peliculaId: peliculaId }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarPeliculas(); // Recarga la lista de películas si se ha añadido una nueva
      }
    });
  }
}