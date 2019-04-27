import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfrastructComponent } from './add-infrastruct.component';

describe('AddInfrastructComponent', () => {
  let component: AddInfrastructComponent;
  let fixture: ComponentFixture<AddInfrastructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfrastructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfrastructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
