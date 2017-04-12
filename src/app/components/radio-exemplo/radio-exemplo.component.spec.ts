import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioExemploComponent } from './radio-exemplo.component';

describe('RadioExemploComponent', () => {
  let component: RadioExemploComponent;
  let fixture: ComponentFixture<RadioExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
