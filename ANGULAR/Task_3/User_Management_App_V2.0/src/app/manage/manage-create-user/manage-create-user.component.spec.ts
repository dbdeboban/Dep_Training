import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCreateUserComponent } from './manage-create-user.component';

describe('ManageCreateUserComponent', () => {
  let component: ManageCreateUserComponent;
  let fixture: ComponentFixture<ManageCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCreateUserComponent ]
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
