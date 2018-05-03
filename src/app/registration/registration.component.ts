import { Component, OnInit } from '@angular/core';
import { RegistrationsService } from '../core/registrations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'name' | 'surname' | 'city' | 'age' | 'phone' | 'email' | 'message';
type FormsErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	inputName: string;
	inputSurname: string;
	inputCity: string;
	inputAge: string;
	inputPhone: string;
	inputTime: string;
	inputEmail: string;
	inputMessage: string;
	show = false;
	hide = true;

  userForm: FormGroup;
  formErrors: FormsErrors = {
    'name': '',
    'surname': '',
    'city': '',
    'age': '',
    'phone': '',
    'email': '',
    'message': ''
  }
  validationMessage = {
    'name': {
      'required' : 'Name is required',
      'minlength' : 'Name must be atleast 3 chars long',
      'maxlength' : 'Name cannot be more than 20 chars long'
    },
    'surname': {
      'required' : 'Surname is required',
      'minlength' : 'Surname must be atleast 3 chars long',
      'maxlength' : 'Surname cannot be more than 20 chars long'
    },
    'city': {
      'required' : 'City is required',
      'minlength' : 'City must be atleast 3 chars long',
      'maxlength' : 'City cannot be more than 20 chars long'
    },
    'age': {
      'required' : 'Age is required',
      'min' : 'Age must be atleast 3 years',
      'max' : 'Age cannot be more 99 years'
    },
    'phone': {
      'required' : 'Phone is required'
    },
    'email': {
      'required' : 'Email is required',
      'email' : 'Email must be valid'
    },
    'message': {
      'maxlength' : 'Message cannot be more than 300 chars long'
    }
  }

  constructor(
  	private _rS: RegistrationsService,
    private formBuilder: FormBuilder
  	) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group(
    {
      'name': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      'surname': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      'city': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      'age': ['', [
        Validators.required,
        Validators.min(3),
        Validators.max(99)
      ]],
      'phone': ['', [
        Validators.required
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'message': ['', [
        Validators.maxLength(300)
      ]]
    });
    this.userForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  onValueChanged(data? :any) {
    if (!this.userForm) {return;}

    const form = this.userForm;

    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid) {
          const messages = this.validationMessage[field];
          if(control.errors) {
            for(const key in control.errors) {
              if(Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as {[key:string]: string})[key]}. `;
              }
            }
          }
        }
      }
    }
  }

  getInputValues(form1) {
  	this.inputName = form1.name.value;
  	this.inputSurname = form1.surname.value;
  	this.inputCity = form1.city.value;
  	this.inputAge = form1.age.value;
  	this.inputPhone = form1.phone.value;
  	this.inputTime = form1.time.value;
  	this.inputEmail = form1.inputEmail.value;
  	this.inputMessage = form1.inputNumber.value;

  	this._rS.addRegistration(
  		this.inputName,
  		this.inputSurname,
  		this.inputCity,
  		this.inputAge,
  		this.inputPhone,
  		this.inputTime,
  		this.inputEmail,
  		this.inputMessage
  	);
    
    form1.name.value = '';
    form1.surname.value = '';
    form1.city.value = '';
    form1.age.value = '';
    form1.phone.value = '';
    form1.time.value = '';
    form1.inputEmail.value = '';
    form1.inputNumber.value = '';
    this.show = true;
    this.hide = false;
  }
}