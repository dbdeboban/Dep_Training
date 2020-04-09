import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
import { AppSettings } from 'CONSTANT';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{
  FirstNameError:string;
  LastNameError:string;
  LoginError:string;
  PasswordError:string;
  AgeError:string;
  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    login: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.pattern(AppSettings.PASSWORD_PATTERN)])
  });
  constructor(private userService: UsersService, private router:Router){
    this.AgeError=AppSettings.AGE_ERROR;
    this.FirstNameError=AppSettings.FIRSTNAME_ERROR;
    this.LastNameError=AppSettings.LASTNAME_ERROR;
    this.LoginError = AppSettings.LOGIN_ERROR;
    this.PasswordError= AppSettings.PASSWORD_ERROR;
  }
  get firstName(){
    return this.form.get('firstName');
  }
  get lastName(){
    return this.form.get('lastName');
  }
  get age(){
    return this.form.get('age');
  }
  get login(){
    return this.form.get('login');
  }
  get password(){
    return this.form.get('password');
  }
  firstNameError(){
    return this.firstName.touched? this.firstName.invalid?true:false :false;
  }
  lastNameError(){
    return this.lastName.touched? this.lastName.invalid?true:false :false;
  }
  ageError(){
    return this.age.touched? this.age.invalid?true:false :false;
  }
  loginError(){
    return this.login.touched? this.login.invalid?true:false :false;
  }
  passwordError(){
    return this.password.touched? this.password.invalid?true:false :false;
  }
  createUser(){
    if(this.form.valid){
      this.userService.createUser(this.form.value).subscribe(
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
