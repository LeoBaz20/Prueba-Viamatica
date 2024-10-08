import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'http://localhost:3000/peliculas';

  constructor(private http: HttpClient) {}

  getPeliculasCount(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/count");
  }

  getPeliculas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  agregarPelicula(pelicula: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pelicula);
  }

  actualizarPelicula(id: number, pelicula: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, pelicula);
  }
}
