import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:Observable<any>;
  @Input() route:string;
  constructor(private userService : UsersService) { }

  ngOnInit() :void{
    this.userList = this.userService.getUsers();
    console.log(this.userList);
  }

}
