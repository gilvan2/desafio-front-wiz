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

  constructor() { }

  ngOnInit(): void {
  }

}
