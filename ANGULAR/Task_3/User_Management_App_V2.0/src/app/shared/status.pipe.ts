import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(user:any): any {
    return user.isDeleted?'Deactive':'Active';
  }

}
