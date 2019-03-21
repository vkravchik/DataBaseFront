import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBuyComponent } from './sale-buy.component';

describe('SaleBuyComponent', () => {
  let component: SaleBuyComponent;
  let fixture: ComponentFixture<SaleBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
