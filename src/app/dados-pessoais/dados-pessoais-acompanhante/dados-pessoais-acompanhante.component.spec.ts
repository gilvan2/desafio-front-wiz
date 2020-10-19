import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisAcompanhanteComponent } from './dados-pessoais-acompanhante.component';

describe('DadosPessoaisAcompanhanteComponent', () => {
  let component: DadosPessoaisAcompanhanteComponent;
  let fixture: ComponentFixture<DadosPessoaisAcompanhanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPessoaisAcompanhanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPessoaisAcompanhanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
