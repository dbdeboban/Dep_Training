import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponentComponent } from './deleted-component/deleted-component.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const deletedRoutes: Routes = [
  {
      path: 'deleted', component: DeletedComponentComponent
  }
  
];

@NgModule({
  declarations: [DeletedComponentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(deletedRoutes)
  ],
  exports:[
    DeletedComponentComponent
  ]
})
export class DeletedModule { }
