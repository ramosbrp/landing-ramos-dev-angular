import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroSectionComponent } from "./components/hero-section/hero-section.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ramos-dev';
}
