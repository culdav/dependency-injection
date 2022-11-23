import { ExperimentalLoggerService } from './experimental-logger.service';
import { Injectable } from '@angular/core';
import { Logger } from 'src/app/logger';

@Injectable({
  providedIn: 'root',
  // useClass: ExperimentalLoggerService
})
export class LoggerService implements Logger {
  prefix = 'root';
  constructor() {}

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
