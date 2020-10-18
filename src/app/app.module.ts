import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DadosEntregaComponent } from './dados-entrega/dados-entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    DadosEntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
