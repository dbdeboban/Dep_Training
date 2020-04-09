import { Injectable } from '@angular/core';


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
  constructor() { }
}

