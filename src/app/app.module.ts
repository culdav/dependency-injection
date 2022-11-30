import { InteractiveWidgetComponent } from './widget/interactive-widget/interactive-widget.component';
import { ReadOnlyWidgetComponent } from './widget/read-only-widget/read-only-widget.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InteractiveWidgetComponent,
    ReadOnlyWidgetComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
