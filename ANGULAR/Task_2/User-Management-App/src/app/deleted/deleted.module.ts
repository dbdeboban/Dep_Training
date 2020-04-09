import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponentComponent } from './deleted-component/deleted-component.component';



@NgModule({
  declarations: [DeletedComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DeletedComponentComponent
  ]
})
export class DeletedModule { }
