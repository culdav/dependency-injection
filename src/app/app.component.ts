import { LoggerService } from './logger.service';
import { Component, Optional, Self } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService],
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = 'App component';
      this.logger.log('constructor init');
    }
  }
}
