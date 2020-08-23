import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesUsageComponent } from './templates-usage.component';
import { TemplatesModule } from '../../common/templates/templates.module';
import { UppercaseModule } from '../../common/uppercase/uppercase.module';



@NgModule({
  imports: [
    CommonModule,

    UppercaseModule,
    TemplatesModule
  ],
  declarations: [ TemplatesUsageComponent ],
  exports: [ TemplatesUsageComponent ]
})
export class TemplatesUsageModule { }
