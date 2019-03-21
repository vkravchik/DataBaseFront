import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadirComponent } from './brigadir.component';

describe('BrigadirComponent', () => {
  let component: BrigadirComponent;
  let fixture: ComponentFixture<BrigadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrigadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
