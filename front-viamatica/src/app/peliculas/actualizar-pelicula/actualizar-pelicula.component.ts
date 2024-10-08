import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './actualizar-pelicula.component.html',
  styleUrls: ['./actualizar-pelicula.component.css']
})
export class ActualizarPeliculaComponent implements OnInit {
  actualizarPeliculaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculasService,
    public dialogRef: MatDialogRef<ActualizarPeliculaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.actualizarPeliculaForm = this.fb.group({
      nombre: [this.data.nombre, Validators.required],
      duracion: [this.data.duracion, [Validators.required, Validators.min(1)]]
    });
  }

  guardar(): void {
    if (this.actualizarPeliculaForm.valid) {
      console.log(this.data);
      this.peliculaService.actualizarPelicula(this.data.id, this.actualizarPeliculaForm.value).subscribe(
        response => {
          console.log('Película actualizada:', response);
          this.dialogRef.close(true); // Cerramos el diálogo y señalamos éxito
        },
        error => {
          console.error('Error al actualizar la película:', error);
        }
      );
    }
  }
 
  cancelar(): void {
    this.dialogRef.close();
  }
}
