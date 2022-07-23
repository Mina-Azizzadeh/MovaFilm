import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
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
export class RegistrationComponent implements OnInit {
  public showWelcomToMova = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcomToMova = false
    }, 2000);
  }
}
