import { Logger } from 'src/app/logger';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryWidgetLoggerService implements Logger {
  private _prefix = 'Gallery widget service';

  constructor() {}

  log(msg: string): void {
    console.log(`${this._prefix}: ${msg}`);
  }
}
