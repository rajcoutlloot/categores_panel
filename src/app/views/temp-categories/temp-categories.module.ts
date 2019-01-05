import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempCategoriesComponent } from './temp-categories/temp-categories.component';
import { RouterModule, Routes } from '@angular/router';
const routes : Routes = [
	{
		path: '',
		component: TempCategoriesComponent
	}
]
@NgModule({
	imports: [
		RouterModule.forChild(routes)
		],
		exports: [RouterModule],
		providers: [TempCategoriesComponent]
	})
export class tempcatRoutingModule{}

@NgModule({
  imports: [
    CommonModule,
    tempcatRoutingModule
  ],
  declarations: [TempCategoriesComponent]
})
export class TempCategoriesModule { }
