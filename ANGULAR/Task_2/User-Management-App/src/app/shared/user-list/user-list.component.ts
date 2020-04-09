import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [];
  @Input() route:string;
  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userList = this.userService.users;
  }
  userRender(user){
    return (this.route === 'active' && !user.isDeleted)||(this.route === 'deleted' && user.isDeleted)||(this.route == 'manage')?true:false;
  }
}
