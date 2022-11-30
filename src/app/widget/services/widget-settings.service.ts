import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetSettingsService {
  getSettings() {
    return {
      pollingInterval: 50000,
    };
  }
}
