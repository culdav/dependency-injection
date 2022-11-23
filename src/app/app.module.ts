import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerService } from 'src/app/logger.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
