import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'show-case',
    loadChildren: () =>
      import('../show-case').then((m) => m.ShowCaseModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('../builder').then((m) => m.BuilderModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
