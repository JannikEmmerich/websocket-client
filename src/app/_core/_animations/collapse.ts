import {animate, state, style, transition, trigger} from '@angular/animations';

export const collapse = trigger('collapse', [
  state('void', style({
    height: 0,
    overflow: 'hidden'
  })),

  transition(':enter, :leave', [
    animate('150ms ease-in-out')
  ])
]);
