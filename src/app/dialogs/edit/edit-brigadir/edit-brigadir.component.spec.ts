import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrigadirComponent } from './edit-brigadir.component';

describe('EditBrigadirComponent', () => {
  let component: EditBrigadirComponent;
  let fixture: ComponentFixture<EditBrigadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrigadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrigadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
