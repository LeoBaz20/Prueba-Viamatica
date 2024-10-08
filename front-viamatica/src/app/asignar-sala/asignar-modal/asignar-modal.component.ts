import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-asignar-modal',
  templateUrl: './asignar-modal.component.html',
  styleUrls: ['./asignar-modal.component.css']
})
export class AsignarModalComponent implements OnInit {
  salas: any[] = [];
  asignarForm: FormGroup;

  constructor(
    private salaService: SalasService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AsignarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { peliculaId: number }
  ) {
    this.asignarForm = this.fb.group({
      salaSeleccionada: [null],
      fechaPublicacion: [null],
      fechaFin: [null]
    });
  }

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

  asignar(sala:any): void {
    if (this.asignarForm.valid) {
      const { fechaPublicacion, fechaFin } = this.asignarForm.value;
      const nuevaAsignacion = {
        id_pelicula: this.data.peliculaId,
        id_sala: sala.id_sala,
        fecha_publicacion: fechaPublicacion,
        fecha_fin: fechaFin,
      };

      console.log(nuevaAsignacion);

      this.salaService.asignarSala(nuevaAsignacion).subscribe(
        () => {
          console.log('Sala asignada correctamente');
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error al asignar la sala:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}