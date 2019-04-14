import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryPersonalComponent } from './edit-category-personal.component';

describe('EditCategoryPersonalComponent', () => {
  let component: EditCategoryPersonalComponent;
  let fixture: ComponentFixture<EditCategoryPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoryPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
