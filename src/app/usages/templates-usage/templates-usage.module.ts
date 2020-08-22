import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesUsageComponent } from './templates-usage.component';
import { TemplatesModule } from '../../common/templates/templates.module';



@NgModule({
  imports: [
    CommonModule,

    TemplatesModule
  ],
  declarations: [ TemplatesUsageComponent ],
  exports: [ TemplatesUsageComponent ]
})
export class TemplatesUsageModule { }
