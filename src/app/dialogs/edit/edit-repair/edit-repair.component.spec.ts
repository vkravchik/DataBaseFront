import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepairComponent } from './edit-repair.component';

describe('EditRepairComponent', () => {
  let component: EditRepairComponent;
  let fixture: ComponentFixture<EditRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
