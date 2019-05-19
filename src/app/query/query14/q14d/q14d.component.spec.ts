import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q14dComponent } from './q14d.component';

describe('Q14dComponent', () => {
  let component: Q14dComponent;
  let fixture: ComponentFixture<Q14dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q14dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q14dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
