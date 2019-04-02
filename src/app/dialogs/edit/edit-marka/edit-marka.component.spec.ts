import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarkaComponent } from './edit-marka.component';

describe('EditMarkaComponent', () => {
  let component: EditMarkaComponent;
  let fixture: ComponentFixture<EditMarkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
