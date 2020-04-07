import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrincipalComponent } from './app-principal.component';

describe('AppPrincipalComponent', () => {
  let component: AppPrincipalComponent;
  let fixture: ComponentFixture<AppPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
