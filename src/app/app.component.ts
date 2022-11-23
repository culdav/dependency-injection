import { ExperimentalLoggerService } from './experimental-logger.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { LegacyLogger } from 'src/app/logger.legacy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: LoggerService, useValue: LegacyLogger }],
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
