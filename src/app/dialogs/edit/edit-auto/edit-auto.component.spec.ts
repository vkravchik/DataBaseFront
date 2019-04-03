import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutoComponent } from './edit-auto.component';

describe('EditAutoComponent', () => {
  let component: EditAutoComponent;
  let fixture: ComponentFixture<EditAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
