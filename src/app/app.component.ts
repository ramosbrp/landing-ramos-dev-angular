import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServicosComponent } from "./components/servicos/servicos.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, ServicosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ramos-dev';
}
