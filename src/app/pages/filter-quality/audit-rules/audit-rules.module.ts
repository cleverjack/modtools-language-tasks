import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditRulesComponent } from './audit-rules.component';
import { AuditRulesRoutingModule } from './audit-rules-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { DiagnoseSideFilterPanelComponent } from './diagnose/side-filter-panel/side-filter-panel.component';
import { AuditRulesHomeComponent } from './home/home.component';
import { DirectiveModule } from 'src/app/directives/directives.module';
import { DiagnoseHeaderComponent } from './diagnose/header/header.component';

@NgModule({
  declarations: [
    AuditRulesComponent,
    DiagnoseComponent,
    DiagnoseHeaderComponent,
    DiagnoseSideFilterPanelComponent,
    AuditRulesHomeComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    DirectiveModule,
    AuditRulesRoutingModule
  ]
})
export class AuditRulesModule { }
