import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeletedComponentComponent } from './deleted-component.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DeletedComponentComponent', () => {
  let component: DeletedComponentComponent;
  let fixture: ComponentFixture<DeletedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DeletedComponentComponent
      ],
      imports:[
        SharedModule,
        HttpClientTestingModule
      ]
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
