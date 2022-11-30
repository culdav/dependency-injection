import { Store } from './../../store.service';
import { INTERACTIVE_WIDGET_DEPS } from './../imports';
import { WidgetActionService } from './../services/widget-action.service';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetBase } from 'src/app/widget/widget-base';
import { WidgetDataService } from 'src/app/widget/services/widget-data.service';
import { WidgetSettingsService } from 'src/app/widget/services/widget-settings.service';

function injectState(key: string) {
  const store = inject(Store);
  return store.select(key);
}

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: ['../widget-base.scss', './interactive-widget.component.scss'],
  imports: [...INTERACTIVE_WIDGET_DEPS],
  standalone: true,
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {
  data$!: Observable<any>;
  config: any;

  state = injectState('users');

  constructor(private actions: WidgetActionService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData();
    this.config = this.settings.getSettings();
  }

  refresh() {
    this.actions.refresh();
  }

  addNewItem() {
    this.actions.addNewItem();
  }
}
