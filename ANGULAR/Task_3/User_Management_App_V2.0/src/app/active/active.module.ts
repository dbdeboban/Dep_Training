import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponentComponent } from './active-component/active-component.component';

@NgModule({
  declarations: [
  ActiveComponentComponent],
  imports: [
    CommonModule,
  ],
  exports:[ActiveComponentComponent]
})
export class ActiveModule { }
