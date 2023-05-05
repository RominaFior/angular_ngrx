import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCasePageComponent } from './page';

const routes: Routes = [
  {
    path: '',
    component: ShowCasePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCaseRoutingModule {}
