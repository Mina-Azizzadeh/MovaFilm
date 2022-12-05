import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mova-input',
  templateUrl: './mova-input.component.html',
  styleUrls: ['./mova-input.component.scss']
})
export class MovaInputComponent implements OnInit {
  
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
