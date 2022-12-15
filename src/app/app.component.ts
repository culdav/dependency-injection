import { LegacyLogger } from './logger.legacy';
import { Component, Injector, OnInit } from '@angular/core';
import { APP_CONFIG } from './config';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

export function loggerFactory(
  injector: Injector
): ExperimentalLoggerService | LoggerService {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector],
    },
    {
      provide: LoggerService,
      useValue: LegacyLogger,
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'dependency-injection';

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    console.log('Logger: ', this.logger);
    this.logger.prefix = 'App Component';
    this.logger.log('App component init...');
  }
}
