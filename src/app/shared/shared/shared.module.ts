import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component'
import { RouterModule } from '@angular/router';

var partials = [
  HeaderComponent,
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [partials],
  exports : [partials]
})
export class SharedModule { }
