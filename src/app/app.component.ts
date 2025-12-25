import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div [class.dark]="themeService.isDarkMode()" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Product Analytics</h1>
        <button (click)="themeService.toggleTheme()" class="px-4 py-2">
          {{ themeService.isDarkMode() ? '☀️' : '🌙' }}
        </button>
      </div>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: ''
})
export class AppComponent {
  themeService = inject(ThemeService);
}
