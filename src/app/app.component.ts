import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCta } from '../components/button-cta/button.cta';
import { FormContato } from '../components/form-contato/form.contato';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonCta, FormContato],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ramos-dev';
}
