import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
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
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
