import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  
  addAcompanhante: boolean = false;
  
  public mascara = '';
  public mask = [ /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,  '-',/\d/,/\d/]

  constructor() { }

  ngOnInit(): void {
  }

}
