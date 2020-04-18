import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDatePickerConfig, ECalendarValue } from 'src/app/shared-components/app-datepicker';
import * as moment from 'moment';
import * as LanguageTasksSeletor from '../../../../store/reducers/language-tasks.reducers';
import * as LanguageTasksActions from '../../../../store/actions/language-tasks.actions';
import { Store, select } from '@ngrx/store';
import { TaskOutput, TaskOutputItems, TaskInput, DefaultService } from 'src/app/api';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
    format: 'MM-DD-YYYY'
  };
  task: TaskOutputItems;
  dueDate: moment.Moment;
  taskFormData: TaskInput; // formdata when create or edit task
  pageType = 0; // enum: 0 - details page, 1 - edit page, 2 - create page
  accountOptions: Array<any> = [
    {
      id: 'All',
      label: 'All'
    },
    {
      id: 'Admin Only',
      label: 'Admin Only'
    },
    {
      id: 'Awesome Client',
      label: 'Awesome Client'
    },
    {
      id: 'Radical Client',
      label: 'Radical Client'
    }
  ];
  assignOptions: Array<any> = [
    {
      id: 'Jhon Smith',
      label: 'Jhon Smith'
    }
  ];

  constructor(
    private readonly store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: DefaultService
  ) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');

    if (taskId) {
      const params: LanguageTasksActions.LanguageTasksRequestInterface = {
        language: 'en',
        clientIds: [12],
        contentIds: [taskId]
      };

      this.store.dispatch(LanguageTasksActions.requestLanguageTaskDetails({params}));
      this.store.pipe(select(LanguageTasksSeletor._getLanguageTaskDetails))
      // .pipe(
      //   tap(res => {
      //       this.totalPages = res ? res.total : 0;
      //       this.p = 1;
      //   }),
      //   map(res => res ? res.items : [])
      // );
      .subscribe((languageTasks: TaskOutput) => {
        const tasks = languageTasks ? languageTasks.items : [];
        if (tasks.length > 0) {
          this.task = tasks[0];
          this.dueDate = moment(this.task.data.dueDate);
        }
      });
      this.pageType = 0;
    } else {
      this.pageType = 2;
      this.taskFormData = {
        clientId: null,
        language: 'en',
        priority: 0,
        data: {
          task: '',
          instructions: '',
          dueDate: moment()
        }
      };
    }
  }

  changeTaskAction(type): void {
    console.log(type);
    this.pageType = type;
    switch (type) {
      case 0:
      case 1:
        this.taskFormData = {
          clientId: null,
          language: 'en',
          priority: 0,
          data: {
            task: this.task ? this.task.data.task : '',
            instructions: this.task ? this.task.data.instructions : '',
            dueDate: this.task ? moment(this.task.data.dueDate) : moment()
          }
        };
        break;
      case 2:
        this.router.navigate(['/filter-quality/language-tasks/create']);
        // this.taskFormData = {
        //   clientId: null,
        //   language: 'en',
        //   priority: 0,
        //   data: {
        //     task: '',
        //     instructions: '',
        //     dueDate: moment()
        //   }
        // };
        break;
      default:
        break;
    }
  }

  onLanguageChange(lang): void {
    console.log(lang);
  }

  changeAssign(item): void {
    console.log('assign changed', this.taskFormData);
  }

  changeAccount(item): void {

  }

  onSave(): void {
    if (this.pageType === 1) {
      this.pageType = 0;
      // this.router.navigate(['/filter-quality/language-tasks']);
    }
    if (this.pageType === 2) {
      const formData: TaskInput = {
        clientId: this.taskFormData.clientId,
        language: this.taskFormData.language,
        priority: this.taskFormData.priority,
        data: {
          task: this.taskFormData.data.task,
          instructions: this.taskFormData.data.instructions,
          dueDate: moment(this.taskFormData.data.dueDate, 'MM-DD-YYYY').valueOf(),
          additionalProp1: {}
        }
      };

      this.apiService.addTaskItems([formData]).subscribe(resp => {
        if (resp.success) {
          this.router.navigate(['/filter-quality/language-tasks']);
        }
      });
    }
  }
}
