import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit{
  agregarPeliculaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculasService,
    public dialogRef: MatDialogRef<AgregarPeliculaComponent>
  ) {}

  ngOnInit(): void {
    this.agregarPeliculaForm = this.fb.group({
      nombre: ['', Validators.required],
      duracion: [null, [Validators.required, Validators.min(1)]]
    });
  }

  guardar(): void {
    if (this.agregarPeliculaForm.valid) {
      this.peliculaService.agregarPelicula(this.agregarPeliculaForm.value).subscribe(
        response => {
          console.log('Película creada:', response);
          this.dialogRef.close(true); // Cerramos el diálogo y señalamos éxito
        },
        error => {
          console.error('Error al crear la película:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
