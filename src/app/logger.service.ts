import { Injectable } from '@angular/core';
import { Logger } from 'src/app/logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  prefix = 'root';

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
