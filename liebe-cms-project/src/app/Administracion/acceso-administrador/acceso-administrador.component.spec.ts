import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoAdministradorComponent } from './acceso-administrador.component';

describe('AccesoAdministradorComponent', () => {
  let component: AccesoAdministradorComponent;
  let fixture: ComponentFixture<AccesoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
