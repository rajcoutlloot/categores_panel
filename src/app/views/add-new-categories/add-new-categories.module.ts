import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new/add-new.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {	MatSnackBarModule } from '@angular/material/snack-bar';
import { AddNewSubcategoriesComponent } from './add-new-subcategories/add-new-subcategories.component';


const routes : Routes = [
	{
		path: '',
		component: AddNewComponent
	},
	{
		path: 'addsubCats',
		component: AddNewSubcategoriesComponent
	}
]
@NgModule({
	imports: [
		RouterModule.forChild(routes)
		],
		exports: [RouterModule],
		providers: [AddNewComponent, AddNewSubcategoriesComponent],
		declarations: []
	})
export class AddnewCatefgoriesRoutingModule{}

@NgModule({
  imports: [
    CommonModule,
    AddnewCatefgoriesRoutingModule,
		ReactiveFormsModule,
		MatSnackBarModule
  ],
  declarations: [ AddNewComponent,AddNewSubcategoriesComponent]
})
export class AddNewCategoriesModule { }
