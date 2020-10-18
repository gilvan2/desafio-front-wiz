import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  
  dadosPessoais = {
    primeiroNome: '',
    ultimoNome: '',
    cpf: '',
    dataNascimento: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
