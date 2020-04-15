import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettings } from 'CONSTANT';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user:any;
  paramsId:any;
  form = new FormGroup({
    age: new FormControl('',Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(AppSettings.PASSWORD_PATTERN)])
  });
  AgeError: string;
  PasswordError: string;

  constructor(private userService: UsersService, private router: Router, private route:ActivatedRoute) {
    this.AgeError=AppSettings.AGE_ERROR;
    this.PasswordError=AppSettings.PASSWORD_ERROR;
   }

  ngOnInit() {
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
  get age(){
    return this.form.get('age');
  }
  get password(){
    return this.form.get('password');
  }
  passwordError(){
    return this.password.touched? this.password.invalid?true:false :false;
  }
  ageError(){
    return this.age.touched? this.age.invalid?true:false :false;
  }
  updateUser() {
    this.user.age = this.form.value.age;
    this.user.password = this.form.value.password;
    if (this.form.valid) {
      this.userService.updateUser(this.user).subscribe(
        (result) => {
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
