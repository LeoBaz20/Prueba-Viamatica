import { Component,OnInit } from '@angular/core';
import { SalasService } from '../services/salas.service';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  totalSalas: number = 0;
  salasDisponibles: number = 0;
  totalPeliculas: number = 10;

  constructor(private salasService: SalasService, private peliculasService: PeliculasService){}

  ngOnInit(): void {
    this.salasService.getSalasCount().subscribe(
      (data:number) => {
        this.totalSalas = data;
      },
      (error) => {
        console.error('Error al obtener las salas:', error);
      }
    );

    this.salasService.getSalasDisponiblesCount().subscribe(
      (response: { statusCode: number; data: { count: number } }) => {
        if (response.statusCode === 200) {
          this.salasDisponibles = response.data.count;
          console.log(response.data);
        } else {
          console.error('Unexpected status code:', response.statusCode);
        }
      },
      (error) => {
        console.error('Error al obtener las salas disponibles:', error);
      }
    );

    this.peliculasService.getPeliculasCount().subscribe(
      (data:number) => {
        this.totalPeliculas = data;
      },
      (error) => {
        console.error('Error al obtener las peliculas:', error);
      }
    );
  }
}
