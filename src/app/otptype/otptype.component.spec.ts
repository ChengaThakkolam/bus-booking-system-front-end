import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtptypeComponent } from './otptype.component';

describe('OtptypeComponent', () => {
  let component: OtptypeComponent;
  let fixture: ComponentFixture<OtptypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtptypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
