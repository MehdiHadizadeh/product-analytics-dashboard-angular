import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal(false);

    constructor() {
        const savedTheme = localStorage.getItem('darkMode');
        this.isDarkMode.set(savedTheme === 'true');
    }

    toggleTheme(): void {
        this.isDarkMode.update(value => !value);
        localStorage.setItem('darkMode', String(this.isDarkMode()));
    }
}