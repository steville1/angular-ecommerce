import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninStatusComponent } from './signin-status.component';

describe('SigninStatusComponent', () => {
  let component: SigninStatusComponent;
  let fixture: ComponentFixture<SigninStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninStatusComponent]
    });
    fixture = TestBed.createComponent(SigninStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
