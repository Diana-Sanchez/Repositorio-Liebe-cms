import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUsuarioResgistradoComponent } from './navbar-usuario-resgistrado.component';

describe('NavbarUsuarioResgistradoComponent', () => {
  let component: NavbarUsuarioResgistradoComponent;
  let fixture: ComponentFixture<NavbarUsuarioResgistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUsuarioResgistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUsuarioResgistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
