import { ExperimentalLoggerService } from './experimental-logger.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }],
})
export class AppComponent implements OnInit {

  constructor(private logger: LoggerService) {}

  // in this case there will be different instances
  // constructor(
  //   private logger: LoggerService,
  //   private experimentalLogger: ExperimentalLoggerService
  // ) {}

  ngOnInit(): void {
    this.logger.prefix = 'App Component';
    this.logger.log('App component init...');
  }
}
