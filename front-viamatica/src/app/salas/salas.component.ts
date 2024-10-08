import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalasService } from '../services/salas.service';
import { AgregarSalasComponent } from './agregar-salas/agregar-salas.component';
import { ActualizarSalasComponent } from './actualizar-salas/actualizar-salas.component';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  salas: any[] = [];
  displayedColumns: string[] = ['id','nombre','estado', 'acciones'];

  constructor(private salaService: SalasService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarSalas();
  }

  cargarSalas(): void {
    this.salaService.getSalas().subscribe(
      (data: any[]) => {
        this.salas = data;
      },
      (error) => {
        console.error('Error al cargar las salas:', error);
      }
    );
  }

  agregarSala(): void {
    const dialogRef = this.dialog.open(AgregarSalasComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarSalas(); // Recarga la lista de películas si se ha añadido una nueva
      }
    });
  }

  modificarSala(sala: any): void {
    const dialogRef = this.dialog.open(ActualizarSalasComponent, {
      data: { id: sala.id_sala, nombre: sala.nombre, estado: sala.estado }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarSalas(); // Recargar la lista de películas si se ha modificado alguna
      }
    });
  }
}
