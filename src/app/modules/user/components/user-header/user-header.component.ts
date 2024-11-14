import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  @Input() isSideMenuShow: any;

  isLoginModalOpen: boolean = false;

  constructor(
    private router: Router,
    // private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  openLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['login']);
  }
}
