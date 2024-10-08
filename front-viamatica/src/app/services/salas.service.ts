import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = 'http://localhost:3000/'; // Ajusta la URL según sea necesario

  constructor(private http: HttpClient) {}

  getSalasCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"salas/count");
  }

  getSalas(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"salas");
  }

  agregarSala(sala: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"salas", sala);
  }

  actualizarSala(id: number, sala: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}salas/${id}`, sala);
  }

  getSalasDisponiblesCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"pelicula-sala/salas-disponibles?countOnly=true");
  }

  asignarSala(sala: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}peliculas-sala`, sala);
  }
}
