import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresourceComponent } from './myresource.component';

describe('MyresourceComponent', () => {
  let component: MyresourceComponent;
  let fixture: ComponentFixture<MyresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
