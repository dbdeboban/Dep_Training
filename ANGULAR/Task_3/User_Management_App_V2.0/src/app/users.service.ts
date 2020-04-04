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

  users: User[] = [
    { id: "1", firstName: 'abcd', lastName: 'Ghosh', age: 25, login: "user-1", password: "p1", isDeleted: false },
    { id: "2", firstName: 'efgh', lastName: 'Mondal', age: 25, login: "user-2", password: "p2", isDeleted: true },
    { id: "3", firstName: 'ijkl', lastName: 'Roy', age: 25, login: "user-3", password: "p3", isDeleted: false },
    { id: "4", firstName: 'mnop', lastName: 'Dey', age: 25, login: "user-3", password: "p4", isDeleted: true }
  ];
  find(id) {
    return this.users[id - 1];
  }
  // userClicked(user: User){
  //   this.find()
  // }
  
  constructor(private http:HttpClient) { }
  getUsers() {
     return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    console.log(user)
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

