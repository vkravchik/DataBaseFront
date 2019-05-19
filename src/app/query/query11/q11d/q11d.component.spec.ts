import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q11dComponent } from './q11d.component';

describe('Q11dComponent', () => {
  let component: Q11dComponent;
  let fixture: ComponentFixture<Q11dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q11dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q11dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
