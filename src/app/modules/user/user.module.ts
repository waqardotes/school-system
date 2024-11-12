import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserSideNavComponent } from './components/user-side-nav/user-side-nav.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserSideNavComponent,
    UserFooterComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
