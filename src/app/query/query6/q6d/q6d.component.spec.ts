import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q6dComponent } from './q6d.component';

describe('Q6dComponent', () => {
  let component: Q6dComponent;
  let fixture: ComponentFixture<Q6dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q6dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q6dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
