import { WINDOW } from './window.token';
import { Component, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(WINDOW) private window: Window) {
    console.log('Window: ', window);
  }
}
