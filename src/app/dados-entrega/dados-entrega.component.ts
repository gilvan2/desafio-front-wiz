import { Component } from '@angular/core';
import { Enderecos } from '../enderecos.module';
import { CorreiosService } from '../correios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dados-entrega',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class DadosEntregaComponent{
  
  mascara = '';
  mask = [ /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/,  '-',/\d/,/\d/];
  
  cep: string = "cep";
  logradouro: string = "";
  pais: string = "";
  uf: string = "";
  localidade: string = "";

  public dadosEnderecos: Enderecos[];

  constructor(

    private correiosService:CorreiosService){}

    ngOnInit(){}
  
  inputEvent(event){
    if(event.target.selectionEnd == 9){

      this.correiosService.getEndereco().subscribe(
        (enderecos:Enderecos[]) => {console.log("Achei os dados de endereços")
        this.dadosEnderecos = enderecos;
        console.log(this.dadosEnderecos['cep']);
        this.logradouro = this.dadosEnderecos['logradouro'];  
        this.pais = "Brasil";
        this.uf = this.dadosEnderecos['uf'];
        this.localidade = this.dadosEnderecos['localidade'];
          }
        );
    }
  }

  onSubmit(){}

}
