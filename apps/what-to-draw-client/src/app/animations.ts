import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [animate('0.3s')])
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate('0.5s ease-out')
  ]),

  transition(':leave', [
    animate(500, style({ transform: 'translateX(-100%)' }))
  ])
]);
