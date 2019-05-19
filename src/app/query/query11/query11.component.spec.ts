import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Query11Component } from './query11.component';

describe('Query11Component', () => {
  let component: Query11Component;
  let fixture: ComponentFixture<Query11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Query11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Query11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
