import { Component } from '@angular/core';
import { CorreiosService } from './correios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'desafio-front-wiz';

  constructor(
    private correiosService: CorreiosService){}

    ngOnInit() {
      this.correiosService.getEndereco().subscribe(prods=>console.log(prods))
    }
}


