import { Logger } from 'src/app/logger';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService implements Logger {
  private _prefix = 'Gallery logger service';

  log(msg: string): void {
    console.log(`${this._prefix}: ${msg}`);
  }
}
