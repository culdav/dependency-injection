import { LoggerService } from './logger.service';
import { Component, Optional, Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService],
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = 'App component';
      this.logger.log('constructor init');
    }

    if (this.parentLogger) {
      this.parentLogger.log('constructor init');
    }
  }
}
