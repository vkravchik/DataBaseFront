import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadaComponent } from './brigada.component';

describe('BrigadaComponent', () => {
  let component: BrigadaComponent;
  let fixture: ComponentFixture<BrigadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrigadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
