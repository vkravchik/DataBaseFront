import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPersonalComponent } from './category-personal.component';

describe('CategoryPersonalComponent', () => {
  let component: CategoryPersonalComponent;
  let fixture: ComponentFixture<CategoryPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
