import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../../services/theme.services/theme.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  onThemeToggle(event: any) {
    this.themeService.toggleTheme(event.checked);
  }
}

