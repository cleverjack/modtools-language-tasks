import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments-panel',
  templateUrl: './comments-panel.component.html',
  styleUrls: ['./comments-panel.component.less']
})
export class CommentsPanelComponent implements OnInit {
  @Output() doCancel = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelPanel() {
    this.doCancel.emit(true);
  }

  applyFilter(data) {
    // this.doApply.emit(data);
  }

}
