import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServicosComponent } from "./components/servicos/servicos.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from '../services/api/api.service';


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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDados().subscribe((res) => {
      this.mensagem = res.mensagem;
      console.log(res);
    });
  }
}
