import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q10dComponent } from './q10d.component';

describe('Q10dComponent', () => {
  let component: Q10dComponent;
  let fixture: ComponentFixture<Q10dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q10dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q10dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
