import {
  animate,
  keyframes,
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

export let bounce = trigger('bounce', [
  transition(':enter', [
    animate(
      '0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
      keyframes([
        style({
          offset: 0,
          opacity: 0,
          transform: 'translateY(-3000px)'
        }),
        style({
          offset: 0.6,
          opacity: 1,
          transform: 'translateY(25px)'
        }),
        style({
          offset: 0.75,
          transform: 'translateY(-10px)'
        }),
        style({
          offset: 0.9,
          transform: 'translateY(5px)'
        }),
        style({
          offset: 1,
          transform: 'translateY(0)'
        })
      ])
    )
  ]),

  transition(':leave', [
    animate(
      '0.3s ease-in',
      keyframes([
        style({
          offset: 0.2,
          transform: 'translateY(10px)'
        }),
        style({
          offset: 0.4,
          opacity: 1,
          transform: 'translateY(-20px)'
        }),
        style({
          offset: 0.45,
          opacity: 1,
          transform: 'translateY(-20px)'
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateY(2000px)'
        })
      ])
    )
  ])
]);
