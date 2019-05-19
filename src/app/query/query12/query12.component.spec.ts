import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Query12Component } from './query12.component';

describe('Query12Component', () => {
  let component: Query12Component;
  let fixture: ComponentFixture<Query12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Query12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Query12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
