import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-checkbox',
  template: `
    <label>
      <input type="checkbox" [formControl]="control">
      <div class="checkbox__label-text" [class.active]="control.value">
        {{labelText}}
      </div>
    </label>
  `,
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() labelText: string = 'Label';

  control = new FormControl();

  ngOnInit(): void {
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.updateValue(value);
    });
  }

  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean): void {
    this.control.setValue(value);
  }

  updateValue(value: boolean): void {
    this.onChange(value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  private onChange = (_: boolean) => {
  };

  private onTouched = () => {
  };
}
