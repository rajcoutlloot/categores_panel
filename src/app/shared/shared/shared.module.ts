import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component'

var partials = [
  HeaderComponent
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [partials],
  exports : [partials]
})
export class SharedModule { }
