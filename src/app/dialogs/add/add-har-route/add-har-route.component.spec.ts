import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHarRouteComponent } from './add-har-route.component';

describe('AddHarRouteComponent', () => {
  let component: AddHarRouteComponent;
  let fixture: ComponentFixture<AddHarRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHarRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHarRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
