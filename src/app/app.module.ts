import { APP_CONFIG } from './config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: APP_CONFIG, useValue: { experimentalEnabled: true } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
