import { AppConfig, APP_CONFIG } from './config';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { LegacyLogger } from 'src/app/logger.legacy';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: (appConfig: AppConfig, http: HttpClient) => {
        return appConfig.experimentalEnabled
          ? new ExperimentalLoggerService(http)
          : new LoggerService();
      },
      deps: [APP_CONFIG, HttpClient],
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'dependency-injection';

  constructor(
    private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService
  ) {}

  ngOnInit(): void {
    this.logger.prefix = 'App Component';
    this.logger.log('App component init...');
  }
}
