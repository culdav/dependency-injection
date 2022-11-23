import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/config';
import { Logger } from 'src/app/logger';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  // constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  //   console.log('ExperimentalLoggerService -> constructor -> config', config);
  // }
  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
