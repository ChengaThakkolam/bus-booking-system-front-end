import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagefetchComponent } from './imagefetch.component';

describe('ImagefetchComponent', () => {
  let component: ImagefetchComponent;
  let fixture: ComponentFixture<ImagefetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagefetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
