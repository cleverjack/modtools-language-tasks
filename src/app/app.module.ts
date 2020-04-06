import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';
import { ThemeModule, lightTheme, darkTheme } from './theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionReducer, StoreModule, MetaReducer } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DiagnoseEffects } from './store/effects/diagnose.effects';
import { ApiModule } from './api';
import { LanguageTasksEffects } from './store/effects/language-tasks.effects';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      DiagnoseEffects,
      LanguageTasksEffects
    ]),
    ApiModule,
    MainModule,
    SubnavModule,
    BreadcrumbModule,
    HttpClientModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
