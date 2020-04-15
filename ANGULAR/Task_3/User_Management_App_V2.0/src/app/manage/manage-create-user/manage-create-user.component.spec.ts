import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCreateUserComponent } from './manage-create-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageCreateUserComponent', () => {
  let component: ManageCreateUserComponent;
  let fixture: ComponentFixture<ManageCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCreateUserComponent ],
      imports:[SharedModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
