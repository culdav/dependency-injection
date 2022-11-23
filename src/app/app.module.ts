import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerService } from 'src/app/logger.service';

import { AppComponent } from './app.component';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
