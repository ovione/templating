import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionUsageComponent } from './content-projection-usage.component';
import { ContentProjectionModule } from '../../common/content-projection/content-projection.module';

@NgModule({
  imports: [
    CommonModule,

    ContentProjectionModule
  ],
  declarations: [ ContentProjectionUsageComponent ],
  exports: [ ContentProjectionUsageComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContentProjectionUsageModule { }
