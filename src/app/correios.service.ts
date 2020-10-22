import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enderecos } from './enderecos.module';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  readonly url: string = 'https://viacep.com.br/ws/73752123/json';

  constructor(private http: HttpClient) { }

  getEndereco():Observable<Enderecos[]> {
    return this.http.get<Enderecos[]>(`${this.url}`); 
  }

}
