import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FullNamePipe } from './full-name.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    CreateFormComponent,
    UpdateFormComponent,
    FullNamePipe,
    StatusPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    CreateFormComponent,
    UpdateFormComponent,
    FullNamePipe,
    StatusPipe
  ]
})
export class SharedModule { }
