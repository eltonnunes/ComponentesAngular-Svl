import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExemploComponent } from './grid-exemplo.component';

describe('GridExemploComponent', () => {
  let component: GridExemploComponent;
  let fixture: ComponentFixture<GridExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
