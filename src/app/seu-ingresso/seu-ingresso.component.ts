import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BuscaFilmesService } from '../busca-filmes.service';
import { Filmes } from '../filmes.module';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-seu-ingresso',
  templateUrl: './seu-ingresso.component.html',
  styleUrls: ['./seu-ingresso.component.css']
})
export class SeuIngressoComponent {

  simpleReqFilmes: Observable<Filmes[]>

  public filmes: Filmes[];
  private imgPath:string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"


  public buscaFilmes = {};

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
      this.listaFilmes();
      console.log(this.buscaFilmes);

      }
    );

    this.buscaFilmes = this.listaFilmes();
  }

  trocaSelecao(event){

    console.log(event.value);
    this.imagem =this.imgPath+this.buscaFilmes[event.value-1]['poster_path'];
    this.titulo =this.buscaFilmes[event.value-1]['title'];
    this.preco =Math.round(this.buscaFilmes[event.value-1]['vote_average']*3);
    this.subtotal =Math.round(this.buscaFilmes[event.value-1]['vote_average']*3);
    this.frete =10;
    this.total =this.subtotal+this.frete;

  }

  listaFilmes(){
    var teste = [
      {poster_path :'/m9cn5mhW519QKr1YGpGxNWi98VJ.jpg',title: 'Demon Slayer: O Trem Infinito',vote_average:7.9,id:"1"},
      {poster_path :'/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg',title: 'Invasão Zumbi 2',vote_average:7.1,id:"2"},
      {poster_path :'/hP2DzWseqPihdxOFjrbGhVrSvhG.jpg',title: 'Como Cães e Gatos 3: Peludos Unidos!',vote_average:6.1,id:"3"},
      {poster_path :'/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg',title: 'The Tax Collector',vote_average:6.1,id:"4"},
      {poster_path :'/eStS2SPitBTNzADpxNPKTA6GCXC.jpg',title: 'Arkansas',vote_average:7.9,id:"5"},
      {poster_path :'/3xsH01M4YqwoewjnL2IDjDm1fFR.jpg',title: 'Convenção das Bruxas',vote_average:7.5,id:"6"},
      {poster_path :'/97pM35EA3gRzuZsGndoq7xljE1X.jpg',title: 'Breaking Surface',vote_average:8.9,id:"7"},
      {poster_path :'/i7eGbUjw721W02ofWEJt4zpiJDp.jpg',title: 'Alita: Anjo de Combate',vote_average:6.9,id:"8"},
      {poster_path :'/llBK9qjUYmc9E6QyXBdYAVGLrh9.jpg',title: 'Ladrão Honesto',vote_average:7.9,id:"9"},
      {poster_path :'/s88UCHnDNRbVduGA1p6Vp8hsgzb.jpg',title: '461個のおべんとう',vote_average:7.9,id:"10"},
      {poster_path :'/agmecdTjKctaFWc6LHLVIr5P3TP.jpg',title: 'Spycies: Agentes Selvagens',vote_average:9.9,id:"11"},
      {poster_path :'/3tjlM3bEiQODqdMFmz9U1utIqPw.jpg',title: 'O Mensageiro do Último Dia',vote_average:5.9,id:"12"},
      {poster_path :'/jpWJNMetVR6zI7K5kJvRoGyfP3u.jpg',title: 'O Iluminado',vote_average:7.9,id:"13"},
      {poster_path :'/htwqnN0zyM1zpY9DgO7dWwq4m2S.jpg',title: 'O Caminho de Volta',vote_average:7.6,id:"14"},
      {poster_path :'/sobZ7jdhcrF9wu4RNHxMpRBIpyj.jpg',title: 'Os Segredos que Mantemos',vote_average:7.3,id:"15"},
      {poster_path :'/zzFftAIaCkNDt8TL4yQN8RweLrw.jpg',title: 'Ela Morre Amanhã',vote_average:7.9,id:"16"},
      {poster_path :'/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg',title: 'The Craft: Legacy',vote_average:7.9,id:"17"},
      {poster_path :'/lIMTtFwSffSbQl6hfqzX6Q4EuF3.jpg',title: 'Arctic Dogs',vote_average:8.9,id:"18"},
      {poster_path :'/glwOyoD0Pzxzyb3l7nELEgjSjQ8.jpg',title: 'Follow Me',vote_average:7.9,id:"19"},
      ];
    return teste;
  }


  
}