import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user:any;
  paramsId:any;
  form = new FormGroup({
    age: new FormControl(),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)])
  });

  constructor(private userService: UsersService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.paramsId = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(this.paramsId);
    console.log(this.user);

    this.route.params.subscribe(
      (param) => {
        this.userService.getUser(param['id']).subscribe(
          (result) => {
            this.user = result;
            console.log('Result: Get User API - ', result);
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
  get age(){
    return this.form.get('age');
  }
  get password(){
    return this.form.get('password');
  }
  updateUser() {
    this.user.age = this.form.value.age;
    this.user.password = this.form.value.password;
    if (this.form.valid) {
      this.userService.updateUser(this.user).subscribe(
        (result) => {
          console.log('Result: Create User API - ', result);
          this.router.navigate([`manage/${result['id']}`]);
        },
        (error) => {
          console.log('Error: Create User API - ', error);
        },
        () => {
          console.log('Complete: Create User API');
        }
      );
    }
  }

}
