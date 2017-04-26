import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertExemploComponent } from './alert-exemplo.component';

describe('AlertExemploComponent', () => {
  let component: AlertExemploComponent;
  let fixture: ComponentFixture<AlertExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
