import { Component, OnInit, Output, Input } from '@angular/core';
import { Comment, CommentInput, DefaultService } from 'src/app/api';

@Component({
  selector: 'app-comment',
  templateUrl: './app-comment.component.html',
  styleUrls: ['./app-comment.component.less']
})
export class AppCommentComponent implements OnInit {
  @Input() isSmall: boolean = false;
  @Input() comment: Comment;
  @Input() queueId: string;
  @Input() contentId: string;
  instruction: string;
  isEdit: boolean = false;

  constructor(private apiService: DefaultService) { }

  ngOnInit(): void {
    if (this.comment) {
      this.instruction = this.comment.text;
    } else {
      this.instruction = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet';
    }
  }

  onEdit(): void {
    this.isEdit = true;
  }

  onSave(): void {
    let body: CommentInput = {};
    body.text = this.instruction

    this.apiService.updateComment(this.queueId, this.contentId, this.comment.commentId, body).subscribe(resp => {
      if (resp) {
        this.comment = resp;
        this.isEdit = false;
      }
    })
  }

  onDelete(): void {
    this.apiService.deleteComment(this.queueId, this.contentId, this.comment.commentId).subscribe(resp => {
      console.log(resp);
    })
  }

  onCancel(): void {
    this.isEdit = false;
    if (this.comment) {
      this.instruction = this.comment.text;
    }
  }

  onResolve(): void {
    this.apiService.resolveComment(this.queueId, this.contentId, this.comment.commentId).subscribe(resp => {
      if(resp) {
        this.comment = resp;
      }
    })
  }
}
