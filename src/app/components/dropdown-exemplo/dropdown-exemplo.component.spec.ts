import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownExemploComponent } from './dropdown-exemplo.component';

describe('DropdownExemploComponent', () => {
  let component: DropdownExemploComponent;
  let fixture: ComponentFixture<DropdownExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
