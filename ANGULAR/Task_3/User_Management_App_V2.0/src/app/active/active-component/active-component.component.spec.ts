import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveComponentComponent } from './active-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActiveComponentComponent', () => {
  let component: ActiveComponentComponent;
  let fixture: ComponentFixture<ActiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        SharedModule,
        HttpClientTestingModule
      ],
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
