import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditRulesComponent } from './audit-rules.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { AuditRulesHomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: AuditRulesComponent,
  children: [
    {
      path: '',
      redirectTo: 'diagnose',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: AuditRulesHomeComponent,
    },
    {
      path: 'diagnose',
      component: DiagnoseComponent,
      data: {
        breadcrumb: 'Diagnose',
        title: 'Diagnose'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRulesRoutingModule { }
