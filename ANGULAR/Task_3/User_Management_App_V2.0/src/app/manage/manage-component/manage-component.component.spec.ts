import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ManageComponentComponent } from './manage-component.component';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageComponentComponent', () => {
  let component: ManageComponentComponent;
  let fixture: ComponentFixture<ManageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ManageComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Router.navigate(["manage/create"])', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigate');

    component.showCreteForm();

    const url = spy.calls.first().args[0];

    expect(url[0]).toBe('manage/create');
  }));
});
