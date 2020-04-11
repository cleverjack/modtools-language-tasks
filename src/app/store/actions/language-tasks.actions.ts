import { createAction, props } from '@ngrx/store';
import { TaskOutput, TaskInput, InlineResponse201 } from 'src/app/api';

export interface LanguageTasksRequestInterface {
    language: string,
    clientIds?: Array<number>,
    contentIds?: Array<string>
}
export interface LanguageTaskAddRequestInterface {
    body?: Array<TaskInput>, 
    updateData?: boolean, 
    extraHttpRequestParams?: any
}

export const requestLanguageTasks = createAction('[Language Tasks Page] Requset Language Tasks', props<{params: LanguageTasksRequestInterface}>());
export const successLanguageTasks = createAction('[Language Tasks Page] Success Language Tasks', props<{languageTasks: TaskOutput}>());
export const failedLanguageTasks = createAction('[Language Tasks Page] Failed Language Tasks', props<{languageTasks: TaskOutput}>());
export const requestLanguageTaskDetails = createAction('[Language Task Details Page] Request Task Details', props<{params: LanguageTasksRequestInterface}>());
export const successLanguageTaskDetails = createAction('[Language Task Details Page] Success Task Details', props<{languageTaskDetails: TaskOutput}>());
export const failedLanguageTaskDetails = createAction('[Language Task Details Page] Failed Task Details', props<{languageTaskDetails: TaskOutput}>());
export const requestLanguageTaskEdit = createAction('[Language Task Edit Page] Request Task Edit', props<{params: LanguageTaskAddRequestInterface}>());
export const successLanguageTaskEdit = createAction('[Language Task Edit Page] Success Task Edit', props<{resp: InlineResponse201}>());
export const failedLanguageTaskEdit = createAction('[Language Task Edit Page] Failed Task Edit', props<{resp: InlineResponse201}>());
export const requestLanguageTaskCreate = createAction('[Language Task Create Page] Request Task Create', props<{params: LanguageTaskAddRequestInterface}>());
export const successLanguageTaskCreate = createAction('[Language Task Create Page] Success Task Create', props<{resp: InlineResponse201}>());
export const failedLanguageTaskCreate = createAction('[Language Task Create Page] Failed Task Create', props<{resp: InlineResponse201}>());