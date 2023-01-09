import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-mova-pin-input',
  templateUrl: './mova-pin-input.component.html',
  styleUrls: ['./mova-pin-input.component.scss']
})
export class MovaPinInputComponent implements OnInit {
  @Input() times: number = 10
  repeatTag: any[] = []
  public form = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.indexOfInput()
    this.repeatTag.forEach(i => {
      this.form?.addControl(i.toString(), new FormControl(''));
    });
  }

  indexOfInput() {
    for (let i = 0; i < this.times; i++) {
      this.repeatTag.push(i)
    }
  }

  onClick(event: any, i: number) {
    let keysToCheck = 'Tab'.split(';');
    console.log(keysToCheck.some(k => k === event.key))
    return keysToCheck.some(k => k === event.key);

  }

  onSubmit() {
    console.log(this.form.value)
   
    
  }
}
