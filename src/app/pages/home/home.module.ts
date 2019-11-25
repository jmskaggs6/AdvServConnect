import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
  ]
})
export class HomeModule { }