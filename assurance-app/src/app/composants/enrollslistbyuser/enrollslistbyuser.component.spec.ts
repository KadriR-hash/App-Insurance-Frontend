import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollslistbyuserComponent } from './enrollslistbyuser.component';

describe('EnrollslistbyuserComponent', () => {
  let component: EnrollslistbyuserComponent;
  let fixture: ComponentFixture<EnrollslistbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollslistbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollslistbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
