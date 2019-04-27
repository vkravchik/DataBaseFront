import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfrastructComponent } from './edit-infrastruct.component';

describe('EditInfrastructComponent', () => {
  let component: EditInfrastructComponent;
  let fixture: ComponentFixture<EditInfrastructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfrastructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfrastructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
