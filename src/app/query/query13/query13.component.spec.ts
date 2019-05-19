import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Query13Component } from './query13.component';

describe('Query13Component', () => {
  let component: Query13Component;
  let fixture: ComponentFixture<Query13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Query13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Query13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
