import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fromTheBottom', [
      transition('void => *', [
        style({
          transform: 'translateY(50px)',
        }),
        animate(
          500,
          style({
            transform: 'translateY(0px)',
          })
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
