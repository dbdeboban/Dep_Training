import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';
import { FullNamePipe } from '../full-name.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

const UsersServiceStub = {
  updateUser() {
    return "UserUpdated";
  }
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [UserComponent, FullNamePipe],
      providers: [{provide: UsersService, useValue: UsersServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('showDetailsClicked() should call to navigate', inject([Router], (router: Router) => {
    let id = 25;
    spyOn(router, "navigate").and.stub();
    component.showDetailsClicked(id);
    expect(router.navigate).toHaveBeenCalledWith(["manage",25]);
  }));
  it('upadateUser should route to manage/:id', inject([Router], (router: Router) => {
    let id = 25;
    spyOn(router, "navigate").and.stub();
    component.upadateUser(id);
    expect(router.navigate).toHaveBeenCalledWith(["manage/update",25]);
  }));
  it('upadateUser should route to manage/:id', inject([Router], (router: Router) => {
    let id = 25;
    spyOn(router, "navigate").and.stub();
    component.upadateUser(id);
    expect(router.navigate).toHaveBeenCalledWith(["manage/update",25]);
  }));
  
});
