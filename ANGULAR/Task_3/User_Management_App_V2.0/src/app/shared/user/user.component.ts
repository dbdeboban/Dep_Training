import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { FullNamePipe } from '../full-name.pipe';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[FullNamePipe]
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Input() route:any;
  constructor(private router: Router, private userService:UsersService) { }

  ngOnInit() {
    console.log(this.route)
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
