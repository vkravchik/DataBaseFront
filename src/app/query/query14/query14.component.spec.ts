import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Query14Component } from './query14.component';

describe('Query14Component', () => {
  let component: Query14Component;
  let fixture: ComponentFixture<Query14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Query14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Query14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
