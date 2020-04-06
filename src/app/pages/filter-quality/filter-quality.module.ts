import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { FilterQualityComponent } from './filter-quality.component';
import { FilterQualityRoutingModule } from './filter-quality-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DirectiveModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [FilterQualityComponent],
  imports: [
    CommonModule,
    FilterQualityRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    DirectiveModule
  ]
})
export class FilterQualityModule { }
