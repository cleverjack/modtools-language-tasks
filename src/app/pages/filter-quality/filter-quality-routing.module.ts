import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterQualityComponent } from './filter-quality.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'language-tasks'
  },
  // {
  //   path: 'audit-rules',
  //   component: FilterQualityComponent,
  //   data: {breadcrumb: 'Audit Rules', title: 'Audit Rules'},
  //   loadChildren: () => import('./audit-rules/audit-rules.module').then(m => m.AuditRulesModule)
  // },
  {
    path: 'language-tasks',
    component: FilterQualityComponent,
    data: {breadcrumb: 'Language Tasks', title: 'Language Tasks'},
    loadChildren: () => import('./language-tasks/language-tasks.module').then(m => m.LanguageTasksModule)
  },
  {
    path: 'create-rule',
    component: FilterQualityComponent,
    data: {breadcrumb: 'Create Rule', title: 'Create Rule'},
    loadChildren: () => import('./create-rule/create-rule.module').then(m => m.CreateRuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterQualityRoutingModule { }
