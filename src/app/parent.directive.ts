import { LoggerService } from 'src/app/logger.service';
import { Directive, Optional, Self } from '@angular/core';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService], //remove to exemplify
})
export class ParentDirective {
  constructor(@Optional() @Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = 'Parent directive';
    }
  }
}
