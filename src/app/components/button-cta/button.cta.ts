import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'button-cta',
  standalone: true,
  template: `  
    @if (isVisible) {
      <button [@fadeIn]="isVisible ? 'visible' : 'hidden'" >Solicitar Orçamento Grátis</button>
    }
  `,
  styleUrl: './button.cta.scss',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        style({ opacity: 0, transform: 'translateX(30px)' }), // Garante que começa do estado certo
        animate('1s ease-out')])
    ])
  ],
})
export class ButtonCta {
  isVisible = false;
  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 3000); // Delay de 3 segundos antes da animação começar
  }
}
