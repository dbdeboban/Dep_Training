import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponentComponent } from './manage-component/manage-component.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ManageUserDetailsComponent } from './manage-user-details/manage-user-details.component';
import { ManageCreateUserComponent } from './manage-create-user/manage-create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const manageRoutes: Routes = [
  {
      path: 'manage', component: ManageComponentComponent, 
      children: [
        { path: 'create', component:ManageCreateUserComponent},
        { path: ':id', component:ManageUserDetailsComponent},
        { path: 'update/:id', component:UpdateUserComponent}
      ]
  }
];
@NgModule({
  declarations: [
    ManageComponentComponent,
    ManageUserDetailsComponent,
    ManageCreateUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports:[
    ManageComponentComponent,
  ]
})
export class ManageModule { }
