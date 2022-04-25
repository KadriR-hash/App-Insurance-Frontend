import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollslistComponent } from './enrollslist.component';

describe('EnrollslistComponent', () => {
  let component: EnrollslistComponent;
  let fixture: ComponentFixture<EnrollslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
