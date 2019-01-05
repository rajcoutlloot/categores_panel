import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HomeComponent } from './home/home.component';


const routes : Routes = [
	{
		path: '',
		component: HomeComponent
	}
]
@NgModule({
	imports: [
		RouterModule.forChild(routes)
		],
		exports: [RouterModule],
		providers: [HomeComponent]
	})
export class HomeRoutingModule{}
@NgModule({
  imports: [
		CommonModule,
		HomeRoutingModule,
		MatSnackBarModule
	],
	exports:[ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class DashboardModule { }
