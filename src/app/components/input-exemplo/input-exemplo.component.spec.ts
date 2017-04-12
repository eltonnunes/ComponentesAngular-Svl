import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExemploComponent } from './input-exemplo.component';

describe('InputExemploComponent', () => {
  let component: InputExemploComponent;
  let fixture: ComponentFixture<InputExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
