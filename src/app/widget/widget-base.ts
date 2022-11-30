import { WidgetSettingsService } from './services/widget-settings.service';
import { WidgetDataService } from './services/widget-data.service';
import { Directive, Input, inject } from '@angular/core';

@Directive()
export abstract class WidgetBase {
  @Input()
  id = '';

  @Input()
  title = '';

  protected dataProvider = inject(WidgetDataService);
  protected settings = inject(WidgetSettingsService);
}
