import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrigadaComponent } from './edit-brigada.component';

describe('EditBrigadaComponent', () => {
  let component: EditBrigadaComponent;
  let fixture: ComponentFixture<EditBrigadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrigadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrigadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
