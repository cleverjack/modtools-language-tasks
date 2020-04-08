import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';
import { AppSelectComponent } from './app-select/app-select.component';
import { ToggleComponent } from './toggle-button/toggle.component';
import { AppPercentBarComponent } from './app-percent-bar/app-percent-bar.component';
import { AppCheckboxComponent } from './app-checkbox/app-checkbox.component';
import { TopicInfoComponent } from './topic-info/topic-info.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { DirectiveModule } from '../directives/directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppDatePickerModule } from './app-datepicker';
import { AppPaginationModule } from './app-pagination/pagination.module';
import { AppLanguageButtonGroupComponent } from './app-language-button-group/app-language-button-group.component';
import { AppCommentComponent } from './app-comment/app-comment.component';
import { CommentsPanelComponent } from './comments-panel/comments-panel.component';

@NgModule({
  declarations: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    AppSelectComponent,
    ToggleComponent,
    AppPercentBarComponent,
    AppCheckboxComponent,
    TopicInfoComponent,
    AppLanguageButtonGroupComponent,
    AppCommentComponent,
    CommentsPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    DirectiveModule,
    BreadcrumbModule,
    AppDatePickerModule,
    AppPaginationModule
  ],
  exports: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    AppSelectComponent,
    ToggleComponent,
    AppPercentBarComponent,
    AppCheckboxComponent,
    TopicInfoComponent,
    AppLanguageButtonGroupComponent,
    AppCommentComponent,
    BreadcrumbModule,
    AppDatePickerModule,
    AppPaginationModule,
    CommentsPanelComponent
  ]
})
export class SharedComponentsModule { }
