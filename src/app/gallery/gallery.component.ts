import { GalleryLoggerService } from '../gallery-logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-wrap">
      <h1 class="gallery-wrap_title">Gallery title</h1>
      <div class="gallery-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./gallery.component.scss'],
  viewProviders: [GalleryLoggerService], //available only for components
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Gallery init');
  }
}
