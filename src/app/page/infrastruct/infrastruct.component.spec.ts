import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructComponent } from './infrastruct.component';

describe('InfrastructComponent', () => {
  let component: InfrastructComponent;
  let fixture: ComponentFixture<InfrastructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
