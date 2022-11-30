import { Component, inject, Inject } from '@angular/core';
import { WINDOW } from './window.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  a14Window = inject(WINDOW);
  constructor(@Inject(WINDOW) private window: Window) {
    console.log('Window: ', window);
    console.log('Window: ', this.a14Window);
  }
}
