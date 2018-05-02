import { Component, OnInit } from '@angular/core';
import { RegistrationsService } from '../core/registrations.service';

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

  constructor(
  	private _rS: RegistrationsService,
  	) { }

  ngOnInit() {
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
    this.inputName = '';
    this.inputSurname = '';
    this.inputCity = '';
    this.inputAge = '';
    this.inputPhone = '';
    this.inputTime = '';
    this.inputMessage = '';
  }
}
