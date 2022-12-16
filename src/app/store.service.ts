import { inject, Injectable, PLATFORM_ID } from '@angular/core';

/**
 * Fake store
 */

@Injectable({
  providedIn: 'root',
  // useFactory: () => {
  //   const platform = inject(PLATFORM_ID);
  //   return platform === 'browser' ? window : ({} as Window);
  // },
})
export class Store<T> {
  constructor() {}

  select(slice: string): { state: T | null } {
    return {
      state: null,
    };
  }
}
