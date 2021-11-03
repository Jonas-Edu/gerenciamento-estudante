import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstudanteComponent } from './list-estudante.component';

describe('ListEstudanteComponent', () => {
  let component: ListEstudanteComponent;
  let fixture: ComponentFixture<ListEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
