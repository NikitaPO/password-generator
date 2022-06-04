import {ChangeDetectorRef, Component, HostListener, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject} from 'rxjs';

import {PASSWORD_GENERATOR_CONFIG} from '../../configs';
import {PasswordGenerationConfig, PasswordGeneratorConfig, PasswordItem} from '../../types';
import {deepEqualObjects, generatePasswordByConfig} from './utils';


@UntilDestroy()
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.repeat && !this.keyPressBlock) {
      this.generateNewPassword();
    }

    this.keyPressBlock = true;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.keyPressBlock = false;
    }
  }

  keyPressBlock = false;

  linearSelectorItems: string[] = Object.keys(this.passwordGeneratorConfig.strengthTypes);
  minLength = this.passwordGeneratorConfig.minLength;
  maxLength = this.passwordGeneratorConfig.maxLength;

  form = this.fb.group({
    strength: ['medium'],
    custom: this.fb.group({
      numbers: [true],
      uppercase: [true],
      lowercase: [true],
      specialSymbols: [false],
      length: [25, [Validators.min(this.minLength), Validators.max(this.minLength)]],
    }),
  });

  generatedPasswords$ = new BehaviorSubject<PasswordItem[]>([]);

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    @Inject(PASSWORD_GENERATOR_CONFIG) private passwordGeneratorConfig: PasswordGeneratorConfig,
  ) {
  }

  ngOnInit() {
    this.form.controls['strength'].valueChanges.pipe(untilDestroyed(this)).subscribe(strength => {
      this.form.controls['custom'].setValue(this.passwordGeneratorConfig.strengthTypes[strength]);
    });

    Object.keys(this.passwordGeneratorConfig.strengthTypes).forEach(strength => {
      this.generateNewPassword(strength);
    });
  }

  generateNewPassword(strength: string | undefined = undefined) {
    const currentPasswords = this.generatedPasswords$.getValue();
    if (currentPasswords.length + 1 > this.passwordGeneratorConfig.passwordsCount) {
      this.generatedPasswords$.next(currentPasswords.slice(1));
    }

    const config: PasswordGenerationConfig = strength ?
      this.passwordGeneratorConfig.strengthTypes[strength] :
      this.form.value.custom;
    const newPassword = generatePasswordByConfig(config);
    let difficulty: string;

    if (strength) {
      difficulty = strength;
    } else {
      const chosenStrength = this.form.value.strength;
      difficulty = deepEqualObjects(this.form.value.custom, this.passwordGeneratorConfig.strengthTypes[chosenStrength]) ?
        chosenStrength : 'custom';
    }

    this.generatedPasswords$.next([...this.generatedPasswords$.getValue(), {text: newPassword, difficulty}]);
  }

  asFormGroup = (a: AbstractControl): FormGroup => a as FormGroup;
}
