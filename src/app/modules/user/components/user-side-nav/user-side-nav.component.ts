import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.scss']
})
export class UserSideNavComponent implements OnInit {
  @Output() onSideMenuOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  items: MenuItem[] | undefined;
  linkPages: MenuItem[] = [];
  pages: MenuItem[] | undefined = [
    {
      label: 'Students',
      routerLink: 'students/search',
      icon: 'fa-duotone fa-user',
      items: [
        { label: 'Search', routerLink: 'students/search', icon: 'fa-duotone fa-magnifying-glass'},
        { label: 'Add New', routerLink: 'students/new', icon: 'fa-duotone fa-plus'},
      ]
    },
    {
      label: 'Teachers',
      routerLink: 'teachers/search',
      icon: 'fa-duotone fa-briefcase',
      items: [
        { label: 'Search', routerLink: 'teachers/search', icon: 'fa-duotone fa-magnifying-glass'},
        { label: 'Add New', routerLink: 'teachers/new', icon: 'fa-duotone fa-plus'},
      ]
    },
    
  ];

  ngOnInit(): void {
    this.linkPages = this.pages || [];
  }

}
