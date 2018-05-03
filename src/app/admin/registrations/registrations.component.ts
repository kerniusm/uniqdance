import { Component, OnInit } from '@angular/core';
import { RegistrationsService } from '../../core/registrations.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  registrations: any;
  constructor(
    private _rS: RegistrationsService
  ) { }

  ngOnInit() {
    this.registrations = this._rS.getAllRegistrations();
  }

  deleteReg(id) {
    this._rS.deleteRegistration(id);
  }

}
