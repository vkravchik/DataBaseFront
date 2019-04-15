import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleBuyComponent } from './add-sale-buy.component';

describe('AddSaleBuyComponent', () => {
  let component: AddSaleBuyComponent;
  let fixture: ComponentFixture<AddSaleBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaleBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
