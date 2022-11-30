import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  loadData(): Observable<any> {
    return of({ title: 'some data...' });
  }
}
