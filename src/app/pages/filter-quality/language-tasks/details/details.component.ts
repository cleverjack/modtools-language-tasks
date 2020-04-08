import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDatePickerConfig, ECalendarValue } from 'src/app/shared-components/app-datepicker';
import * as moment from 'moment';
import * as LanguageTasksSeletor from '../../../../store/reducers/language-tasks.reducers';
import * as LanguageTasksActions from '../../../../store/actions/language-tasks.actions';
import { Store, select } from '@ngrx/store';
import { TaskOutput, TaskOutputItems } from 'src/app/api';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

const DEF_CONF: IDatePickerConfig = {
  firstDayOfWeek: 'su',
  monthFormat: 'MMM, YYYY',
  disableKeypress: false,
  allowMultiSelect: false,
  closeOnSelect: undefined,
  closeOnSelectDelay: 100,
  openOnFocus: true,
  openOnClick: true,
  onOpenDelay: 0,
  closeOnEnter: true,
  weekDayFormat: 'ddd',
  appendTo: document.body,
  showNearMonthDays: true,
  showWeekNumbers: false,
  enableMonthSelector: true,
  yearFormat: 'YYYY',
  showGoToCurrent: true,
  dayBtnFormat: 'DD',
  monthBtnFormat: 'MMM',
  hours12Format: 'hh',
  hours24Format: 'HH',
  meridiemFormat: 'A',
  minutesFormat: 'mm',
  minutesInterval: 1,
  secondsFormat: 'ss',
  secondsInterval: 1,
  showSeconds: false,
  showTwentyFourHours: false,
  timeSeparator: ':',
  multipleYearsNavigateBy: 10,
  showMultipleYearsNavigation: false,
  locale: moment.locale(),
  hideInputContainer: false,
  returnedValueType: ECalendarValue.String,
  unSelectOnClick: true,
  hideOnOutsideClick: true,
  numOfMonthRows: 3
};

@Component({
  selector: 'app-language-task-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  name: string;
  instruction: string;
  control: FormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'DD-MM-YYYY'
  };
  task: TaskOutputItems;
  dueDate: moment.Moment;
  
  constructor(
    private readonly store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let taskId = this.route.snapshot.paramMap.get('id');
    
    let params: LanguageTasksActions.LanguageTasksRequestInterface = {
      language: 'en',
      clientIds: [12],
      contentIds: [taskId]
    };

    this.store.dispatch(LanguageTasksActions.requestLanguageTaskDetails({params: params}));
    this.store.pipe(select(LanguageTasksSeletor._getLanguageTaskDetails))
    // .pipe(
    //   tap(res => {
    //       this.totalPages = res ? res.total : 0;
    //       this.p = 1;
    //   }),
    //   map(res => res ? res.items : [])
    // );
    .subscribe((languageTasks: TaskOutput) => {
      console.log('--------------tasks---------------', languageTasks);
      let tasks = languageTasks ? languageTasks.items : [];
      if (tasks.length > 0) {
        this.task = tasks[0];
        this.dueDate = moment(this.task.data.dueDate);
      }
    });
  }

  onLanguageChange(lang): void {
    console.log(lang);
  }
}
