import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { RouterModule, Routes } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';

const routes : Routes = [
	{
		path: '',
		component: SubcategoriesComponent
	},
	{
		path: 'attributes',
		component: AttributesComponent
	}	
		
]
@NgModule({
	imports: [
		RouterModule.forChild(routes)
		],
		exports: [RouterModule],
		providers: [SubcategoriesComponent,AttributesComponent]
	})
export class SubcatRoutingModule{}

@NgModule({
  imports: [
		CommonModule,
		SubcatRoutingModule
  ],
  declarations: [SubcategoriesComponent,AttributesComponent]
})
export class SubcategoriesModule { }
