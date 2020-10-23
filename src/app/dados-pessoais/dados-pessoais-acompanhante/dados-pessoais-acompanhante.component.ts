import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais-acompanhante',
  templateUrl: './dados-pessoais-acompanhante.component.html',
  styleUrls: ['./dados-pessoais-acompanhante.component.css']
})
export class DadosPessoaisAcompanhanteComponent implements OnInit {

  constructor() { }

  nome = '';
  ultimoNome = '';
  cpf ='';
  dtNascimento = '';
  email = '';
  
  public mascara = '';
  public mask = [ /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,  '-',/\d/,/\d/]


  ngOnInit(): void {
  }

}
