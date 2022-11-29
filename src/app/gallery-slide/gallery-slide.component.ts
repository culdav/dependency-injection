import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from 'src/app/gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  template: '<p>Slide content</p>',
})
export class GallerySlideComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Slide init');
  }
}
