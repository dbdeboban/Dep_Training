import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponentComponent } from './active-component/active-component.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';


const activeRoutes: Routes = [
  {
      path: 'active', component: ActiveComponentComponent 
  }
  
];

@NgModule({
  declarations: [
  ActiveComponentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(activeRoutes)
  ],
  exports:[ActiveComponentComponent]
})
export class ActiveModule { }
