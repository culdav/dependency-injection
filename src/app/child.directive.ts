import { LoggerService } from 'src/app/logger.service';
import { Directive, Host } from '@angular/core';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  constructor(@Host() private logger: LoggerService) {
    this.logger.log('directive constructor');
  }
}
