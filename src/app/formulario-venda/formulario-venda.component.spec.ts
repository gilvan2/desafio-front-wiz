import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVendaComponent } from './formulario-venda.component';

describe('FormularioVendaComponent', () => {
  let component: FormularioVendaComponent;
  let fixture: ComponentFixture<FormularioVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
