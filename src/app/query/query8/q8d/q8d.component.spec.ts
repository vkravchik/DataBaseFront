import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q8dComponent } from './q8d.component';

describe('Q8dComponent', () => {
  let component: Q8dComponent;
  let fixture: ComponentFixture<Q8dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q8dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q8dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
