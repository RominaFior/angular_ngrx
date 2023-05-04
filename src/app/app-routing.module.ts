import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules';

const routes: Routes = [
  {
    path: '', //TODO: Private!,
    component: HomePageComponent,
    loadChildren: () => import('../app/modules').then((m) => m.HomeModule),
  },
  {
    path: 'auth', //TODO: Public!
    loadChildren: () => import('../app/modules').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/show-case',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
