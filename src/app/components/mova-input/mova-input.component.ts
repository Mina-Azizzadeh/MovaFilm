import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mova-input',
  templateUrl: './mova-input.component.html',
  styleUrls: ['./mova-input.component.scss']
})
export class MovaInputComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() placeholder = ''
  @Input() icon = ''

  constructor() { }

  ngOnInit(): void {
  }

}
