import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesUserComponent } from './insurances-user.component';

describe('InsurancesUserComponent', () => {
  let component: InsurancesUserComponent;
  let fixture: ComponentFixture<InsurancesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
