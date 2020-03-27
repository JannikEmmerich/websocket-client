import {animate, state, style, transition, trigger} from '@angular/animations';

export const slideRight = trigger('slideRight', [
  state('void', style({transform: 'translateX(100%)'})),

  transition(':enter, :leave', [
    animate('200ms cubic-bezier(.2, 0, .13, 1.5)')
  ])
]);
