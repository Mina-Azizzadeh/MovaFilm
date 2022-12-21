import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mova-pin-input',
  templateUrl: './mova-pin-input.component.html',
  styleUrls: ['./mova-pin-input.component.scss']
})
export class MovaPinInputComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onkeyup(event: KeyboardEvent) {
    const otpValue = +event.key
    if (!Number.isNaN(otpValue)) {
      console.log('isNumber')
      console.log(otpValue)
    }
  }

  onClick(e: any) {
    console.log(e)
  }
}
