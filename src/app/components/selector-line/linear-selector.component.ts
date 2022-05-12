import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef, HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-linear-selector',
  templateUrl: './linear-selector.component.html',
  styleUrls: ['./linear-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LinearSelectorComponent),
      multi: true,
    },
  ],
})
export class LinearSelectorComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() items: string[];

  @ViewChild('fillLine', {static: false}) fillLine: ElementRef;
  @ViewChildren('radioButton') radioButtons: QueryList<ElementRef>;

  @HostListener('window:resize')
  onResize() {
    this.updateFillLineWidth();
  }

  @HostListener('window:keyup', ['$event'])
  keyUp(event) {
    const currentItemIndex = this.items.indexOf(this.control.value);

    console.log('currentItemIndex', currentItemIndex, 'this.items.length - 1', this.items.length - 1);

    if ((event.key === '+' || event.key === '=') && currentItemIndex < this.items.length - 1) {
      this.control.setValue(this.items[currentItemIndex + 1]);
    }

    if ((event.key === '-' || event.key === '_') && currentItemIndex > 0) {
      this.control.setValue(this.items[currentItemIndex - 1])
    }
  }

  control = new FormControl('');

  ngOnInit() {
    // TODO: add until Destroy
    this.control.valueChanges.subscribe(value => {
      this.updateValue(value);
    });
  }

  ngAfterViewInit() {
    if (this.items.length >= 2) {
      this.updateFillLineWidth();

      this.control.valueChanges.subscribe(() => {
        this.updateFillLineWidth();
      });
    }
  }

  writeValue(value: string): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(newValue: string): void {
    this.onChange(newValue);
    this.onTouched();
  }

  private updateFillLineWidth() {
    const nativeLineElement = this.fillLine.nativeElement;
    const chosenElementIndex = this.items.indexOf(this.control.value);

    const radioXCoords: number[] = [];
    this.radioButtons.forEach((radioButton, index) => {
      const classList = radioButton.nativeElement.classList;
      index < chosenElementIndex ? classList.add('force-checked') : classList.remove('force-checked');

      const absoluteCoords = radioButton.nativeElement.getBoundingClientRect();
      radioXCoords.push(absoluteCoords.x);
    });

    const newWidth = radioXCoords[chosenElementIndex] - radioXCoords[0];
    nativeLineElement.style.width = `${newWidth}px`;
  }

  private onChange = (val: string) => {
  };

  private onTouched = () => {
  };
}
