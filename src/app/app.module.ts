import { EngagingReporterService } from './engaging-reporter.service';
import { BrowserReporterService } from './browser-reporter.service';
import { REPORTERS } from './reporter.token';
import { APP_CONFIG } from './config';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true,
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
