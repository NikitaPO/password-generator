import {InjectionToken} from '@angular/core';

import {PasswordGeneratorConfig} from '../types';


export const PASSWORD_GENERATOR_CONFIG = new InjectionToken('passwordGeneratorConfig', {
  providedIn: 'root',
  factory: () => passwordGeneratorConfig,
});

export const passwordGeneratorConfig: PasswordGeneratorConfig = {
  minLength: 5,
  maxLength: 10000,
  passwordsCount: 10,
  strengthTypes: {
    bad: {
      numbers: false,
      uppercase: false,
      lowercase: false,
      specialSymbols: false,
      length: 8,
    },
    low: {
      numbers: false,
      uppercase: true,
      lowercase: true,
      specialSymbols: false,
      length: 15,
    },
    medium: {
      numbers: true,
      uppercase: true,
      lowercase: true,
      specialSymbols: false,
      length: 25,
    },
    high: {
      numbers: true,
      uppercase: true,
      lowercase: true,
      specialSymbols: true,
      length: 40,
    },
  },
};
