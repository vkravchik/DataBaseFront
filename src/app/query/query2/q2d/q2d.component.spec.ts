import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2dComponent } from './q2d.component';

describe('Q2dComponent', () => {
  let component: Q2dComponent;
  let fixture: ComponentFixture<Q2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
