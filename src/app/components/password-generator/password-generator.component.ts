import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

import {PASSWORD_GENERATOR_CONFIG} from '../../constants';
import {PasswordGeneratorConfig} from '../../types';
import {BehaviorSubject} from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {

  linearSelectorItems: string[] = Object.keys(this.passwordGeneratorConfig.strengthTypes);
  minLength = this.passwordGeneratorConfig.minLength;
  maxLength = this.passwordGeneratorConfig.maxLength;

  form = this.fb.group({
    strength: ['medium'],
    custom: this.fb.group({
      numbers: [true],
      uppercase: [true],
      lowercase: [true],
      symbols: [false],
      length: [25, [Validators.min(this.minLength), Validators.max(this.minLength)]],
    }),
  });

  generatedPasswords$ = new BehaviorSubject([
    {text: 'kDJFKDNfklqklwerkkasdf', difficulty: 'medium'},
    {text: 'asdkfajsdfjjH!@JGh1b1bh3vbjh--asdf', difficulty: 'medium'},
    {text: 'HJbkjbnj!ui2g1h2b31h2t38712t7841gb124k1j2h', difficulty: 'hard'},
    {text: '12i38hnj1njkh', difficulty: 'low'},
  ]);

  constructor(
    private fb: FormBuilder,
    @Inject(PASSWORD_GENERATOR_CONFIG) private passwordGeneratorConfig: PasswordGeneratorConfig,
  ) {
  }

  ngOnInit() {
    this.form.controls['strength'].valueChanges.pipe(untilDestroyed(this)).subscribe(strength => {
      this.form.controls['custom'].setValue(this.passwordGeneratorConfig.strengthTypes[strength]);
    })
  }

  asFormGroup = (a: AbstractControl): FormGroup => a as FormGroup;
}
