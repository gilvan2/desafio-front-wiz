import { Component, OnInit } from '@angular/core';
import { BuscaFilmesService } from '../busca-filmes.service';
import { Filmes } from '../filmes.module';

@Component({
  selector: 'app-seu-ingresso',
  templateUrl: './seu-ingresso.component.html',
  styleUrls: ['./seu-ingresso.component.css']
})
export class SeuIngressoComponent {

  public filmes: Filmes[];
  private imgPath:string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

  public imagem = "";
  public titulo = "";
  public preco = 0;
  public subtotal = 0;
  public frete = 0;
  public total = 0;

  constructor(
  private buscaFilmesService: BuscaFilmesService){ }

  ngOnInit(){
    this.buscaFilmesService.getFilmes().subscribe(
      (filmes:Filmes[])=>{console.log(filmes)
      this.filmes=filmes;
      this.imagem = this.imgPath+this.filmes['results'][0]['poster_path'];
      this.titulo = this.filmes['results'][0]['title'];
      this.preco = Math.round(this.filmes['results'][0]['vote_average']*3);
      this.subtotal = Math.round(this.filmes['results'][0]['vote_average']*3);
      this.frete = 10;
      this.total = (this.subtotal + this.frete); 

      }
    )
  }

  click(){
    console.log("Clicou");
  }
}