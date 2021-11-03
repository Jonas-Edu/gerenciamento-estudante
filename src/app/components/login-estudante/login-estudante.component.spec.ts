import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstudanteComponent } from './login-estudante.component';

describe('LoginEstudanteComponent', () => {
  let component: LoginEstudanteComponent;
  let fixture: ComponentFixture<LoginEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
