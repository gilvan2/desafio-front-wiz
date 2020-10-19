import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuIngressoComponent } from './seu-ingresso.component';

describe('SeuIngressoComponent', () => {
  let component: SeuIngressoComponent;
  let fixture: ComponentFixture<SeuIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeuIngressoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeuIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
