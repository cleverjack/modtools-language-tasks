import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'filter-quality'
  },
  {
    path: 'filter-quality',
    loadChildren: () => import('./pages/filter-quality/filter-quality.module').then(m => m.FilterQualityModule),
    data: { breadcrumb: 'Filter Quality' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
