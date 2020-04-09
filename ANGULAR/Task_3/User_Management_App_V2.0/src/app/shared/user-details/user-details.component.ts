import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute } from '@angular/router';
import { FullNamePipe } from '../full-name.pipe';
import { StatusPipe } from '../status.pipe';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers:[FullNamePipe,StatusPipe]
})
export class UserDetailsComponent implements OnInit {

  paramsId:any;
  user:any;
  constructor(private userService:UsersService, private route:ActivatedRoute,) { }

  ngOnInit():void {
    this.paramsId = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(this.paramsId);

    this.route.params.subscribe(
      (param) => {
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.user = result;
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      });
    }

    activeStatus(){
      return this.user.isDeleted?'red':'rgb(0, 214, 0)'
    }

}
