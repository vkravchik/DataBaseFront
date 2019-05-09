import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsStreetComponent } from './dialogs-street.component';

describe('DialogsStreetComponent', () => {
  let component: DialogsStreetComponent;
  let fixture: ComponentFixture<DialogsStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
