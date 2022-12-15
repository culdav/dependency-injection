import { REPORTERS } from './reporter.token';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Logger } from 'src/app/logger';
import { Reporter } from 'src/app/reporter';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  log(message: string): void {
    console.log(`${this.prefix} (experimental): ${message}`);
    // this.reporters.forEach((r) => r.report());
  }
}
