import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedComponentComponent } from './deleted-component.component';

describe('DeletedComponentComponent', () => {
  let component: DeletedComponentComponent;
  let fixture: ComponentFixture<DeletedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
