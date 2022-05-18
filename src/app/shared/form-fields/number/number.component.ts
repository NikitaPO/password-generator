import {Component, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-number',
  template: `
    <div class="input-number__wrapper">
      <input type="number" [formControl]="control" [min]="min" [max]="max" (blur)="onBlur()">
      <div class="input-number__controls">
        <button class="input-number__minus-btn" (click)="decreaseValue()">
          <app-icon type="arrow" height="19" width="11"></app-icon>
        </button>
        <button class="input-number__plus-btn" (click)="increaseValue()">
          <app-icon type="arrow" height="19" width="11"></app-icon>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true,
    },
  ],
})
export class NumberComponent implements ControlValueAccessor {

  @Input() min: number = 0;
  @Input() max: number = 999999999;

  @HostListener('mousewheel', ['$event'])
  onWheel(event: WheelEvent): void {
    event.preventDefault();
    event.deltaY > 0 ? this.decreaseValue() : this.increaseValue();
  }

  control = new FormControl();

  onBlur(): void {
    this.updateValue(this.control.value);
  }

  increaseValue() {
    this.updateValue(this.control.value + 1);
  }

  decreaseValue() {
    this.updateValue(this.control.value - 1);
  }

  writeValue(value: number): void {
    this.control.setValue(this.getBoundaryValue(value));
  }

  updateValue(value: number): void {
    value = this.getBoundaryValue(value);

    this.control.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  private getBoundaryValue(value: number): number {
    if (value > this.max) {
      return this.max;
    }

    if (value < this.min) {
      return this.min;
    }

    return value;
  }

  private onChange = (_: number) => {
  };

  private onTouched = () => {
  };
}
