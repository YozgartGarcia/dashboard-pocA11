import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashNavbar1Component } from './dash-navbar1/dash-navbar1.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'navbar1', component: DashNavbar1Component },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
