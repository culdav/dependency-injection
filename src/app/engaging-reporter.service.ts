import { Reporter } from './reporter';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporterService implements Reporter {
  constructor() {}

  report(): void {
    console.log(`
      Engaging report: User has been using the website for --- seconds.
    `);
  }
}
