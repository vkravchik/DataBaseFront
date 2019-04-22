import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardRouteComponent } from './edit-hard-route.component';

describe('EditHardRouteComponent', () => {
  let component: EditHardRouteComponent;
  let fixture: ComponentFixture<EditHardRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHardRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
