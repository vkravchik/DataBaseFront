import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12dComponent } from './q12d.component';

describe('Q12dComponent', () => {
  let component: Q12dComponent;
  let fixture: ComponentFixture<Q12dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q12dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
