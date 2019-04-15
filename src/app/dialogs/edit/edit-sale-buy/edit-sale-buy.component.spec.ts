import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleBuyComponent } from './edit-sale-buy.component';

describe('EditSaleBuyComponent', () => {
  let component: EditSaleBuyComponent;
  let fixture: ComponentFixture<EditSaleBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSaleBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaleBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
