import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServicosComponent } from "./components/servicos/servicos.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { HeaderComponent } from './components/header/header.component';
import { LogService } from '../services/log.service/log.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, ServicosComponent, SobreComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ramos-dev';
  mensagem: string = '';
  window: Window | undefined
  constructor(private logService: LogService) { }

  ngOnInit() {
    // if (environment) { // Enviar logs apenas em produção
    const logData = {
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || 'direct'
    };

    this.logService.sendData(logData).subscribe((res) => {
      this.mensagem = res;
    });
    // }
  }
}
