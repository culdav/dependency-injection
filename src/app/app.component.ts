import { LoggerService } from './logger.service';
import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(@Optional() private logger: LoggerService) {
    if (this.logger) {
      this.logger.log('App constructor init');
    }
  }
}
