import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommentComponent } from './app-comment.component';
import { DefaultService, Comment } from 'src/app/api';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppCommentComponent', () => {
  let component: AppCommentComponent;
  let fixture: ComponentFixture<AppCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AppCommentComponent ],
      providers: [ DefaultService, UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommentComponent);
    component = fixture.componentInstance;
    const comment: Comment = {
      moderatorId: 'test',
      resolved: true
    }
    component.comment = comment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
