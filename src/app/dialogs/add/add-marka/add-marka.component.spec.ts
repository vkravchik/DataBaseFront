import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkaComponent } from './add-marka.component';

describe('AddMarkaComponent', () => {
  let component: AddMarkaComponent;
  let fixture: ComponentFixture<AddMarkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
