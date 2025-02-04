import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private themeKey = 'app-theme';
    private darkThemeClass = 'dark-theme';
    private lightThemeClass = 'light-theme';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.loadTheme();
    }

    private loadTheme() {
        if (isPlatformBrowser(this.platformId)) {
            // Executa apenas no navegador
            const savedTheme = localStorage.getItem(this.themeKey);
            if (savedTheme) {
                document.documentElement.classList.add(savedTheme);
            } else {
                document.documentElement.classList.add(this.lightThemeClass);
            }
        }
    }

    toggleTheme() {
        if (isPlatformBrowser(this.platformId)) {
            const isDarkMode = document.documentElement.classList.contains(this.darkThemeClass);

            if (isDarkMode) {
                console.log(document.documentElement.classList);
                document.documentElement.classList.replace(this.darkThemeClass, this.lightThemeClass);
                localStorage.setItem(this.themeKey, this.lightThemeClass);
            } else {
                console.log(document.documentElement.classList);
                document.documentElement.classList.replace(this.lightThemeClass, this.darkThemeClass);
                localStorage.setItem(this.themeKey, this.darkThemeClass);
            }
        }
    }
}
