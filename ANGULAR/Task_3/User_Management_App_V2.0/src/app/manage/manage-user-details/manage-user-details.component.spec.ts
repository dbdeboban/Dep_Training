import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserDetailsComponent } from './manage-user-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageUserDetailsComponent', () => {
  let component: ManageUserDetailsComponent;
  let fixture: ComponentFixture<ManageUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserDetailsComponent ],
      imports:[SharedModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
