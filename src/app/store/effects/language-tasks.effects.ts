import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
// import { ApiService } from '../../services/api.service';
import * as LanguageTasksActions from '../actions/language-tasks.actions';
import { ConstantsService } from 'src/app/services/constants.service';
import { DefaultService } from '../../api';

@Injectable()
export class LanguageTasksEffects {

  getLanguageTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguageTasksActions.requestLanguageTasks),
      exhaustMap(action =>
        this.apiService.getTaskItems(action.params.language, action.params.clientIds).pipe(
          map(response => {
            return LanguageTasksActions.successLanguageTasks({ languageTasks: response });
          }),
          catchError(error => of(LanguageTasksActions.failedLanguageTasks({ languageTasks: error })))
        )
      )
    )
  );

  getLanguageTaskDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguageTasksActions.requestLanguageTaskDetails),
      exhaustMap(action =>
        this.apiService.getTaskItems(action.params.language, null, action.params.contentIds).pipe(
          map(response => LanguageTasksActions.successLanguageTaskDetails({ languageTaskDetails: response })),
          catchError(error => of(LanguageTasksActions.failedLanguageTaskDetails({ languageTaskDetails: error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: DefaultService
  ) { }
}