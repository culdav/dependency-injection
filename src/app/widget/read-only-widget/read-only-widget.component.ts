import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { READ_ONLY_WIDGET_DEPS } from 'src/app/widget/imports';
import { WidgetActionService } from 'src/app/widget/services/widget-action.service';
import { WidgetDataService } from 'src/app/widget/services/widget-data.service';
import { WidgetSettingsService } from 'src/app/widget/services/widget-settings.service';
import { WidgetBase } from 'src/app/widget/widget-base';

@Component({
  selector: 'app-read-only-widget',
  templateUrl: './read-only-widget.component.html',
  styleUrls: ['../widget-base.scss', './read-only-widget.component.scss'],
  standalone: true,
  imports: [...READ_ONLY_WIDGET_DEPS],
})
export class ReadOnlyWidgetComponent extends WidgetBase implements OnInit {
  data$!: Observable<any>;
  config: any;

  constructor(
    private actions: WidgetActionService,
    dataProvider: WidgetDataService,
    settings: WidgetSettingsService
  ) {
    super(dataProvider, settings);
  }

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData().pipe(map((data) => data.title));
    this.config = this.settings.getSettings();
    console.log(this.title);
  }

  refresh(): void {
    this.actions.refresh();
  }
}
