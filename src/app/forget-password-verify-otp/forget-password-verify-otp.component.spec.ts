import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordVerifyOtpComponent } from './forget-password-verify-otp.component';

describe('ForgetPasswordVerifyOtpComponent', () => {
  let component: ForgetPasswordVerifyOtpComponent;
  let fixture: ComponentFixture<ForgetPasswordVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordVerifyOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
