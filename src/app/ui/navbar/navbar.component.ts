import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navToggled: boolean = false;
  dropdownToggled: boolean = false;
  hideAdminMenu: boolean = false;
  isLoginPage: boolean = false;
  currentRoute: any;

  constructor(
    private _authS: AuthService,
    private router: Router,
    private _aR: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          if (event.url.split('/')[1] === 'admin') {
            this.hideAdminMenu = false;
          } else {
            this.hideAdminMenu = true;
          }
          if (event.url.split('/')[1] === 'login') {
            this.isLoginPage = true;
          } else {
            this.isLoginPage = false;
          }
      }
    });
  }

  toggleNav() {
    this.navToggled = !this.navToggled;
  }

  dropdownToggle() {
    this.dropdownToggled = !this.dropdownToggled;
  }

  signOut() {
    this._authS.logout();
  }
}
