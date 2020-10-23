import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from './filmes.module';

@Injectable({
  providedIn: 'root'
})
export class BuscaFilmesService {

  readonly url: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=32ed0c054091aee103a0f55c35e13930&language=pt-BR&page=1';

  constructor(private http: HttpClient) { }

  getFilmes():Observable<Filmes[]> {
    return this.http.get<Filmes[]>(`${this.url}`); 
  }
}
