import { WidgetSettingsService } from './services/widget-settings.service';
import { WidgetDataService } from './services/widget-data.service';
import { Directive, Input } from '@angular/core';

@Directive()
export abstract class WidgetBase {
  @Input()
  id = '';

  @Input()
  title = '';

  constructor(
    protected dataProvider: WidgetDataService,
    protected settings: WidgetSettingsService
  ) {}
}
