import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEstudanteComponent } from './registration-estudante.component';

describe('RegistrationEstudanteComponent', () => {
  let component: RegistrationEstudanteComponent;
  let fixture: ComponentFixture<RegistrationEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
