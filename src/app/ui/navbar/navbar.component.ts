import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navToggled: boolean = false;
  dropdownToggled: boolean = false;
  hideAdminMenu: boolean = false;

  constructor(
    private _authS: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (window.location.pathname === '/') {
      this.hideAdminMenu = true;
    } else {
      this.hideAdminMenu = false;
    }
  }

  toggleNav() {
    this.navToggled = !this.navToggled;
  }

  dropdownToggle() {
    this.dropdownToggled = !this.dropdownToggled;
  }

}
