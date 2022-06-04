import {animate, style, transition, trigger} from '@angular/animations';


export const lineAppearAnimation = trigger('lineAppearAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate('.5s ease-out', style({opacity: 1})),
  ]),
  transition(':leave', [
    style({position: 'absolute', width: '*', transform: 'translateY(100%)', bottom: '-5px'}),
    animate('.5s ease-out', style({opacity: 0})),
  ]),
]);
