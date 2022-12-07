import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'mova-input',
  templateUrl: './mova-input.component.html',
  styleUrls: ['./mova-input.component.scss']
})
export class MovaInputComponent implements OnInit {

  @Input() control!: FormControl | any;
  @Input() placeholder = ''
  @Input() icon = ''
  @Input() prefix = false
  @Input() Suffix = false

  constructor() { }

  ngOnInit(): void {
  }
}
