import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from './filmes.module';

@Injectable({
  providedIn: 'root'
})
export class BuscaFilmesService {

  

  constructor(private http: HttpClient) { }

  getFilmes():Observable<Filmes[]> {
    return this.http.get<Filmes[]>(`${this.url}`); 
  }
}
