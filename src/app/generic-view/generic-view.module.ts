import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ThemeModule, lightTheme, darkTheme } from '../theme';


@NgModule({
  declarations: [GenericViewComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ]
})
export class GenericViewModule { }
