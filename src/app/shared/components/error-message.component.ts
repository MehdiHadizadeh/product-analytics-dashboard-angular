import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: false,
  template: `
    <div class="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-4">
      <p class="text-red-800 dark:text-red-200">{{ message }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  @Input() message: string = 'An error occurred';
}