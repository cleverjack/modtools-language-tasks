import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as LanguageTasksSeletor from '../../../../store/reducers/language-tasks.reducers';
import * as LanguageTasksActions from '../../../../store/actions/language-tasks.actions';
import { TaskOutputItems, TaskOutput } from 'src/app/api';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language-tasks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  p: number;
  totalPages: number;
  isCommentsPanel: boolean;

  // tasks: Observable<Array<TaskOutputItems>>;
  tasks: Array<TaskOutputItems>;
  perPageCounts: Array<number> = [15, 50, 100, 500, 1000];
  
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    let params: LanguageTasksActions.LanguageTasksRequestInterface = {
      language: 'en',
      clientIds: [12]
    };

    this.store.dispatch(LanguageTasksActions.requestLanguageTasks({params: params}));
    this.store.pipe(select(LanguageTasksSeletor._getLanguageTasks))
    // .pipe(
    //   tap(res => {
    //       this.totalPages = res ? res.total : 0;
    //       this.p = 1;
    //   }),
    //   map(res => res ? res.items : [])
    // );
    .subscribe((languageTasks: TaskOutput) => {
      console.log('--------------tasks---------------', languageTasks);
      this.totalPages = languageTasks ? languageTasks.total : 0;
      this.tasks = languageTasks ? languageTasks.items : [];
    });
  }

  onPageCountChange (count): void {
    console.log(count);
  }

  openCommentsPanel (comment): void {
    this.isCommentsPanel = true;
  }

  closeCommentsPanel (): void {
    this.isCommentsPanel = false;
  }
}
