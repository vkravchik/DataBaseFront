import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3dComponent } from './q3d.component';

describe('Q3dComponent', () => {
  let component: Q3dComponent;
  let fixture: ComponentFixture<Q3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
