import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasPostComponent } from './entradas-post.component';

describe('EntradasPostComponent', () => {
  let component: EntradasPostComponent;
  let fixture: ComponentFixture<EntradasPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
