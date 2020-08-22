import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesUsageModule } from './usages/templates-usage/templates-usage.module';
import { ContentProjectionUsageModule } from './usages/content-projection-usage/content-projection-usage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ContentProjectionUsageModule,
    TemplatesUsageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
