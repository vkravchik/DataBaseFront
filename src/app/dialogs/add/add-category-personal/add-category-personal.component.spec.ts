import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryPersonalComponent } from './add-category-personal.component';

describe('AddCategoryPersonalComponent', () => {
  let component: AddCategoryPersonalComponent;
  let fixture: ComponentFixture<AddCategoryPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
