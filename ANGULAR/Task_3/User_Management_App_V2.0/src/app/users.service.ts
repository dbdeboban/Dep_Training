import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers() {
     return this.http.get<User[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get<User>('http://localhost:8080/users/'+ id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });
 }

  delete(id: string) {
    return this.http.delete('http://localhost:8080/users/' + id);
  }

}

