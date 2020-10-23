import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilmesComponent } from './modal-filmes.component';

describe('ModalFilmesComponent', () => {
  let component: ModalFilmesComponent;
  let fixture: ComponentFixture<ModalFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
