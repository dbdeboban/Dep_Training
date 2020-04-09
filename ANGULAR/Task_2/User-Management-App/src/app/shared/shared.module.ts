import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserDetailsComponent,
    UserListComponent
  ]
})
export class SharedModule { }
