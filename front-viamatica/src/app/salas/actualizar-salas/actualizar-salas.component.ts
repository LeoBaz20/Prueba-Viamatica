import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-actualizar-salas',
  templateUrl: './actualizar-salas.component.html',
  styleUrls: ['./actualizar-salas.component.css']
})
export class ActualizarSalasComponent implements OnInit {
  actualizarSalaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salaService: SalasService,
    public dialogRef: MatDialogRef<ActualizarSalasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.actualizarSalaForm = this.fb.group({
      nombre: [this.data.nombre, Validators.required],
    });
  }

  guardar(): void {
    console.log(this.data);
    if (this.actualizarSalaForm.valid) {
      this.salaService.actualizarSala(this.data.id, this.actualizarSalaForm.value).subscribe(
        response => {
          console.log('Sala actualizada:', response);
          this.dialogRef.close(true); // Cerramos el diálogo y señalamos éxito
        },
        error => {
          console.error('Error al actualizar la sala:', error);
        }
      );
    }
  }
 
  cancelar(): void {
    this.dialogRef.close();
  }
}
