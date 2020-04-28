import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLandingComponent } from './body-landing.component';

describe('BodyLandingComponent', () => {
  let component: BodyLandingComponent;
  let fixture: ComponentFixture<BodyLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
