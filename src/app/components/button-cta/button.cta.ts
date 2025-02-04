import { Component, signal } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'button-cta',
  standalone: true,
  template: `  
    <button  [@fadeIn]="animationState()">Solicitar Orçamento Grátis</button>
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
