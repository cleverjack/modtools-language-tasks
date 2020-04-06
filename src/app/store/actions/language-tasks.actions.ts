import { createAction, props } from '@ngrx/store';
import { TaskOutput } from 'src/app/api';

export interface LanguageTasksRequestInterface {
    language: string,
    clientIds?: Array<number>,
    contentIds?: Array<string>
}

export const requestLanguageTasks = createAction('[Language Tasks Page] Requset Language Tasks', props<{params: LanguageTasksRequestInterface}>());
export const successLanguageTasks = createAction('[Language Tasks Page] Success Language Tasks', props<{languageTasks: TaskOutput}>());
export const failedLanguageTasks = createAction('[Language Tasks Page] Failed Language Tasks', props<{languageTasks: TaskOutput}>());
export const requestLanguageTaskDetails = createAction('[Language Task Details Page] Request Task Details', props<{params: LanguageTasksRequestInterface}>());
export const successLanguageTaskDetails = createAction('[Language Task Details Page] Success Task Details', props<{languageTaskDetails: TaskOutput}>());
export const failedLanguageTaskDetails = createAction('[Language Task Details Page] Failed Task Details', props<{languageTaskDetails: TaskOutput}>());
