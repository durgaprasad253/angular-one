import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePhoneLoginComponent } from './code-phone-login.component';

describe('CodePhoneLoginComponent', () => {
  let component: CodePhoneLoginComponent;
  let fixture: ComponentFixture<CodePhoneLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodePhoneLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodePhoneLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
