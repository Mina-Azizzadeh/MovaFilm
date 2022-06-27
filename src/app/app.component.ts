import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('list2', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.5)',
        }),
        animate(500),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Mova';
}
