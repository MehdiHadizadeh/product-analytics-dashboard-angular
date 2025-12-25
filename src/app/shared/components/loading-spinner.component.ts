import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: false,
  template: `
    <div class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent { }