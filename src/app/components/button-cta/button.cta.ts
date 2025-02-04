import { Component, signal } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'button-cta',
  standalone: true,
  imports: [MatButtonModule],
  template: `  
    <a mat-button class="button-cta" [@fadeIn]="animationState()" href="https://api.whatsapp.com/send/?phone=5521989140246&text&type=phone_number&app_absent=0" target="_blank" >Solicitar Orçamento Grátis</a>
  `,
  styleUrl: './button.cta.scss',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(200%)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('1s ease-out')])
    ])
  ],
})
export class ButtonCta {
  animationState = signal<'hidden' | 'visible'>('hidden');

  ngOnInit() {
    setTimeout(() => {
      this.animationState.set('visible');
    }, 1000);
  }
}
