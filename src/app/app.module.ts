import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DadosEntregaComponent } from './dados-entrega/dados-entrega.component';
import { SeuIngressoComponent } from './seu-ingresso/seu-ingresso.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormularioVendaComponent } from './formulario-venda/formulario-venda.component';
import { DadosPessoaisAcompanhanteComponent } from './dados-pessoais/dados-pessoais-acompanhante/dados-pessoais-acompanhante.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    DadosEntregaComponent,
    SeuIngressoComponent,
    FormularioVendaComponent,
    DadosPessoaisAcompanhanteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
