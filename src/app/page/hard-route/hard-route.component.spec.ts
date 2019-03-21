import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardRouteComponent } from './hard-route.component';

describe('HardRouteComponent', () => {
  let component: HardRouteComponent;
  let fixture: ComponentFixture<HardRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
