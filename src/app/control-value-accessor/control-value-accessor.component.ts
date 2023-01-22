import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorComponent),
      multi: true
    }
  ]
})
export class ControlValueAccessorComponent implements ControlValueAccessor {
  value: number = 0;

  list: number[] = [1, 2, 3, 4, 5];

  private fnChange = (_: any) => { };

  private fnTouched = () => { };

  writeValue(value: any): void {
    this.value = value ? value : 0;
  }

  registerOnChange(fn: any): void {
    this.fnChange = fn;
    console.log(fn)
  }


  registerOnTouched(fn: any): void {
    this.fnTouched = fn;
  }

  changeValue(num: number): void {
    this.value = num;
    this.fnChange(num);
  }

}