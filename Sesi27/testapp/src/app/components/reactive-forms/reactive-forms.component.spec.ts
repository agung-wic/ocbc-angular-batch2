import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComponent } from './reactive-forms.component';

import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render email and password input elements', ()=> {
    const compiled = fixture.debugElement.nativeElement;
    const formElement = compiled.querySelector('#loginForm');
    const emailInputElement = formElement.querySelector('input[id="email"]');
    const passInputElement = formElement.querySelector('input[id="password"]')

    expect(emailInputElement).toBeTruthy();
    expect(passInputElement).toBeTruthy();
  });

});
