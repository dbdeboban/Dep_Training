import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponentComponent } from './active-component/active-component.component';
import { SharedModule } from '../shared/shared.module';
// import { UserComponent } from '../user/user.component';



@NgModule({
  declarations: [
  ActiveComponentComponent],
  imports: [
    CommonModule,
  ],
  exports:[ActiveComponentComponent]
})
export class ActiveModule { }
