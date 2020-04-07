import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioWebComponent } from './sitio-web.component';

describe('SitioWebComponent', () => {
  let component: SitioWebComponent;
  let fixture: ComponentFixture<SitioWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
