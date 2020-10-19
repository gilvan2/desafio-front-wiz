import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-entrega',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class DadosEntregaComponent implements OnInit {

  dadosEntrega = {
    cep: '',
    endereco: '',
    pais: '',
    estado: '',
    cidade: '',
    telefone:''
  }

  public mascara = '';
  public mask = [ /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/,  '-',/\d/,/\d/]

  constructor() { }

  ngOnInit(): void {
  }

}
