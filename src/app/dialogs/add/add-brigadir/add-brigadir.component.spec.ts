import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrigadirComponent } from './add-brigadir.component';

describe('AddBrigadirComponent', () => {
  let component: AddBrigadirComponent;
  let fixture: ComponentFixture<AddBrigadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrigadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrigadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
