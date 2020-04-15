import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-manage-component',
  templateUrl: './manage-component.component.html',
  styleUrls: ['./manage-component.component.css']
})
export class ManageComponentComponent {

  routeSnap='manage';
  constructor(private route : ActivatedRoute,private userService : UsersService, private router : Router) { }

  showCreateForm(){
    this.router.navigate(['manage/create']);
  }
  
}
