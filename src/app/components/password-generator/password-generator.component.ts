import {Component} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  form = this.fb.group({
    strength: ['medium'],
    custom: this.fb.group({
      numbers: [true],
      uppercase: [true],
      lowercase: [true],
      symbols: [false],
      length: [25],
    }),
  });
  //
  strength = new FormControl('medium');
  //
  // customForm = this.fb.group({
  //     numbers: [true],
  //     uppercase: [true],
  //     lowercase: [true],
  //     symbols: [false],
  //     length: [25],
  //   });

  constructor(
    private fb: FormBuilder,
  ) {
  }

  asFormControl = (a: any) => a as FormControl;
}
