import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navToggled: boolean = false;
  dropdownToggled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.navToggled = !this.navToggled;
  }

  dropdownToggle() {
    this.dropdownToggled = !this.dropdownToggled;
  }

}
