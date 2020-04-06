import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { has } from 'lodash';
import { faHome, faBook, faUserCheck, faFilter, faFlag, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.less']
})
export class SubNavigationComponent implements OnInit {
  faHome = faHome;
  faBook = faBook;
  faUserCheck = faUserCheck;
  faFilter = faFilter;
  faFlag = faFlag;
  faChartLine = faChartLine;
  constructor() { }

  @Output() collapseEvent = new EventEmitter<boolean>();

  ngOnInit() {}

}
