import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsRouteComponent } from './dialogs-route.component';

describe('DialogsRouteComponent', () => {
  let component: DialogsRouteComponent;
  let fixture: ComponentFixture<DialogsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
