import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageTasksComponent } from './language-tasks.component';
import { LanguageTasksRoutingModule } from './language-tasks-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LanguageTasksHomeHeaderComponent } from './home/header/header.component';
import { LanguageTasksDetailsHeaderComponent } from './details/header/header.component';
import { AppDatePickerModule } from 'src/app/shared-components/app-datepicker';
import { AppPaginationModule } from 'src/app/shared-components/app-pagination/pagination.module';



@NgModule({
  declarations: [
    LanguageTasksComponent,
    HomeComponent,
    LanguageTasksHomeHeaderComponent,
    DetailsComponent,
    LanguageTasksDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AppDatePickerModule,
    AppPaginationModule,
    LanguageTasksRoutingModule
  ]
})
export class LanguageTasksModule { }
