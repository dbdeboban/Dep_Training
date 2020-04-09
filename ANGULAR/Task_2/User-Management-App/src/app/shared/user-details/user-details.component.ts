import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  paramsId:any;
  user:any;
  constructor(private userService:UsersService, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.paramsId = +this.route.snapshot.params['id'];
    this.user = this.userService.find(this.paramsId);

    this.route.params.subscribe(
      (param) => {
        this.user = this.userService.find(<Number>param['id']);
      }
    );
  }
  activeStyle(){
   return this.user.isDeleted ? 'red': 'green';
  }
  getActiveStatus(){
    return this.user.isDeleted ? 'Deactive': 'Active';
  }

}
