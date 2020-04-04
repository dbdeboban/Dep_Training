import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl(),
    login: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)])
  });
  constructor(private userService: UsersService, private router:Router){
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
    console.log(this.form.get('password'));
    return this.form.get('password');
  }
  createUser(){
    if(this.form.valid){
      this.userService.createUser(this.form.value).subscribe(
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
  ngOnInit(){}
}
