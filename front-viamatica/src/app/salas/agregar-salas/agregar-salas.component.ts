import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalasService } from 'src/app/services/salas.service';


@Component({
  selector: 'app-agregar-salas',
  templateUrl: './agregar-salas.component.html',
  styleUrls: ['./agregar-salas.component.css']
})
export class AgregarSalasComponent implements OnInit {
  agregarSalaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salaService: SalasService,
    public dialogRef: MatDialogRef<AgregarSalasComponent>
  ) {}

  ngOnInit(): void {
    this.agregarSalaForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  guardar(): void {
    if (this.agregarSalaForm.valid) {
      this.salaService.agregarSala(this.agregarSalaForm.value).subscribe(
        response => {
          console.log('Sala creada:', response);
          this.dialogRef.close(true); // Cerramos el diálogo y señalamos éxito
        },
        error => {
          console.error('Error al crear la sala:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
