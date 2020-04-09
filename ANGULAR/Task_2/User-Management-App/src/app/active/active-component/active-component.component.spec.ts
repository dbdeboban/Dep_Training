import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveComponentComponent } from './active-component.component';

describe('ActiveComponentComponent', () => {
  let component: ActiveComponentComponent;
  let fixture: ComponentFixture<ActiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
