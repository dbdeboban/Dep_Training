import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponentComponent } from './manage-component/manage-component.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ManageUserDetailsComponent } from './manage-user-details/manage-user-details.component';

const manageRoutes: Routes = [
  {
      path: 'manage', component: ManageComponentComponent, 
      children: [
        { path: ':id', component:ManageUserDetailsComponent}
      ]
  }
  
];
@NgModule({
  declarations: [
    ManageComponentComponent,
    ManageUserDetailsComponent,
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
