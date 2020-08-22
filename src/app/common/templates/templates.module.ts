import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplatesComponent],
  exports: [TemplatesComponent],
})
export class TemplatesModule { }
