import { TestBed, inject } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UsersService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
 
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UsersService);
  });
 
  afterEach(() => {
    httpTestingController.verify();
  });
 
  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
 
  it('should call getUser(id) returned Observable should match the right data', () => {
    const data =
    {
      id: "1",
      firstName: 'Dev',
      lastName: 'Ban',
      age: 20,
      login: "loginid",
      password: "pass",
      isDeleted: false
    };
 
    service.getUser('1')
      .subscribe(userData => {
        expect(userData.firstName).toEqual('Dev');
        expect(userData.lastName).toEqual('Bas');
      });
 
    const req = httpTestingController.expectOne('http://localhost:8080/users/1');
 
    expect(req.request.method).toEqual('GET');
 
    req.flush(data);
  });
 
  it('should call getUsers() returned Observable should match the right data', () => {
    const data = [
      { id: "1", firstName: 'Dev', lastName: 'Banerjee', age: 20, login: "loginid", password: "pass", isDeleted: false },
      { id: "2", firstName: 'sam', lastName: 'dale', age: 22, login: "loginids", password: "pass2", isDeleted: true }
    ];
 
    service.getUsers()
      .subscribe(userData => {
        expect(userData[0].firstName).toEqual('Dev');
        expect(userData[0].lastName).toEqual('Banerjee');
        expect(userData[1].firstName).toEqual('sam');
        expect(userData[1].lastName).toEqual('dale');
      });
 
    const req = httpTestingController.expectOne('http://localhost:8080/users');
 
    expect(req.request.method).toEqual('GET');
 
    req.flush(data);
  });
 
});
