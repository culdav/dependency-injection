import { GalleryWidgetLoggerService } from './gallery-widget-logger.service';
import { GalleryLoggerService } from './gallery-logger.service';
import { LoggerService } from './logger.service';
import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-gallery>
        <app-gallery-card></app-gallery-card>
        <app-gallery-slide></app-gallery-slide>
      </app-gallery>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: GalleryLoggerService,
      useExisting: GalleryWidgetLoggerService,
    },
  ],
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(@Optional() private logger: LoggerService) {
    if (this.logger) {
      this.logger.log('App constructor init');
    }
  }
}
