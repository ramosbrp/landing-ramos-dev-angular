import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private themeKey = 'app-theme';
    private darkThemeClass = 'dark-theme';
    private lightThemeClass = 'light-theme';

    private isDarkMode = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkMode.asObservable();

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.loadTheme();
    }

    private loadTheme() {
        const savedTheme = localStorage.getItem(this.themeKey);
        const isDark = savedTheme === this.darkThemeClass;

        this.isDarkMode.next(isDark);
        this.applyTheme(isDark);
    }

    toggleTheme(isDark: boolean) {
        this.isDarkMode.next(isDark);
        localStorage.setItem(this.themeKey, isDark ? this.darkThemeClass : this.lightThemeClass);
        this.applyTheme(isDark);
    }

    private applyTheme(isDark: boolean) {
        if (isDark) {
            this.document.body.classList.add(this.darkThemeClass);
            this.document.body.classList.remove(this.lightThemeClass);
        } else {
            this.document.body.classList.add(this.lightThemeClass);
            this.document.body.classList.remove(this.darkThemeClass);
        }
    }
}
