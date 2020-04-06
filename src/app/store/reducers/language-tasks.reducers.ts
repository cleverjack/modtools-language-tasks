import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as LanguageTasksActions from '../actions/language-tasks.actions';
import { IAppState } from '.';
import { TaskOutput } from 'src/app/api';

export interface State {
    languageTasks: TaskOutput;
    languageTaskDetails: TaskOutput;
}

export const initialState: State = {
  languageTasks: null,
  languageTaskDetails: null,
};

const languageTasksReducer = createReducer(
  initialState,
  on(LanguageTasksActions.successLanguageTasks, (state, { languageTasks }) => ({ ...state, languageTasks })),
  on(LanguageTasksActions.failedLanguageTasks, state => ({ ...state })),
  on(LanguageTasksActions.successLanguageTaskDetails, (state, { languageTaskDetails }) => ({ ...state, languageTaskDetails })),
  on(LanguageTasksActions.failedLanguageTaskDetails, state => ({ ...state })),
);

export function reducer(state: State | undefined, action: Action) {
  return languageTasksReducer(state, action);
}

// language tasks selectors
export const getLanguageTasksData = (state: IAppState) => state.languageTasksData;

export const _getLanguageTasks = createSelector(getLanguageTasksData, (languageTasksData) => {
  return languageTasksData.languageTasks;
});

export const _getLanguageTaskDetails = createSelector(getLanguageTasksData, (languageTasksData) => {
  return languageTasksData.languageTaskDetails;
});
