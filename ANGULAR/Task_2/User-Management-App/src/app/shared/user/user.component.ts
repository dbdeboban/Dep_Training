import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @Input() user:any;
  @Input() route:any;
  borderStyle:string;
  constructor(private router: Router, private userService:UsersService) { }

  showDetailsClicked(id){
    this.router.navigate(['manage',id]);
  }
  deactivateButtonClicked(){
    this.user.isDeleted=true;
  }
  activateButtonClicked(){
    this.user.isDeleted=false;
  }
  renderIfActive(){
    return (this.route=='active' && !this.user.isDeleted)?true:false;
  }
  renderIfDeleted(){
    return (this.route=='deleted' && this.user.isDeleted)?true:false;
  }
  renderIfManage(){
    return (this.route=='manage')?true:false;
  }
  ngOnInit(){
    this.borderStyle=this.user.isDeleted?'border-style-red':'border-style-green';
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
