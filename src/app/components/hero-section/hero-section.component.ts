import { Component } from '@angular/core';
import { ButtonCta } from '../button-cta/button.cta';
import { FormContato } from '../form-contato/form.contato';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonCta, FormContato],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
