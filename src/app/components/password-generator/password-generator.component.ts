import {Component, Inject} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {PASSWORD_STRENGTH_CONFIG} from '../../constants';
import {PasswordStrengthConfig} from '../../types';

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


  linearSelectorItems: string[] = Object.keys(this.passwordStrengthConfig);

  constructor(
    private fb: FormBuilder,
    @Inject(PASSWORD_STRENGTH_CONFIG) private passwordStrengthConfig: PasswordStrengthConfig,
  ) {
  }
}
