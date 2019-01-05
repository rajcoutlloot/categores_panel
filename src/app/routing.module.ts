import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
	  path: '',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  },
  {
	  path: 'subcats',
    loadChildren: './views/subcategories/subcategories.module#SubcategoriesModule'
  },
  {
	  path: 'tempcats',
    loadChildren: './views/temp-categories/temp-categories.module#TempCategoriesModule'
  },
  {
	  path: 'addCats',
    loadChildren: './views/add-new-categories/add-new-categories.module#AddNewCategoriesModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
