import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { FullNamePipe } from '../full-name.pipe';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[FullNamePipe]
})
export class UserComponent {

  @Input() user:any;
  @Input() route:any;
  borderStyle:string;
  constructor(private router: Router, private userService:UsersService) {
    this.borderStyle=this.user.isDeleted? '1px solid rgba(255, 48, 48,0.75)':'1px solid rgb(0, 214, 0)';
   }

  showDetailsClicked(id){
    this.router.navigate(['manage',id]);
  }
  upadateUser(id){
    this.router.navigate(['manage/update',id]);
  }
  deactivateButtonClicked(user){
    user.isDeleted = true;
    this.userService.updateUser(user).subscribe();
  }
  activateButtonClicked(user){
    user.isDeleted = false;
    this.userService.updateUser(user).subscribe();
  }
  displayOnlyActive(){
    return (this.route=='active' && !this.user.isDeleted)?true:false;
  }
  displayOnlyDeleted(){
    return (this.route=='deleted' && this.user.isDeleted)?true:false;
  }
  displayOnlyManage(){
    return (this.route=='manage')?true:false;
  }
}

export interface User{
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}
