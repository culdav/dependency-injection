import { GalleryLoggerService } from '../gallery-logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  template: ` <p>Card content</p> `,
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Card init');
  }
}
