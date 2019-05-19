import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q13dComponent } from './q13d.component';

describe('Q13dComponent', () => {
  let component: Q13dComponent;
  let fixture: ComponentFixture<Q13dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q13dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q13dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
