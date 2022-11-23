import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService],
})
export class AppComponent {
  title = 'dependency-injection';

  constructor() {}
}
