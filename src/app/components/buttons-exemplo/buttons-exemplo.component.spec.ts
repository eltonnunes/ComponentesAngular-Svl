import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsExemploComponent } from './buttons-exemplo.component';

describe('ButtonsExemploComponent', () => {
  let component: ButtonsExemploComponent;
  let fixture: ComponentFixture<ButtonsExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
