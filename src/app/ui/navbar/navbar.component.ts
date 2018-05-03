import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (location.pathname.split('/')[1] === 'admin') {
      this.hideAdminMenu = false;
    } else {
      this.hideAdminMenu = true;
    }
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
