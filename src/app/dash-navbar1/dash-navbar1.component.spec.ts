import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavbar1Component } from './dash-navbar1.component';

describe('DashNavbar1Component', () => {
  let component: DashNavbar1Component;
  let fixture: ComponentFixture<DashNavbar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashNavbar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashNavbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
