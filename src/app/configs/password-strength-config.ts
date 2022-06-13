import {InjectionToken} from '@angular/core';

import {PasswordGeneratorConfig} from '../types';


export const PASSWORD_GENERATOR_CONFIG = new InjectionToken('passwordGeneratorConfig', {
  providedIn: 'root',
  factory: () => passwordGeneratorConfig,
});

export const passwordGeneratorConfig: PasswordGeneratorConfig = {
  minLength: 5,
  maxLength: 100000,
  passwordsCount: 10,
  strengthTypes: {
    bad: {
      numbers: false,
      uppercase: false,
      lowercase: false,
      specialSymbols: false,
      length: 6,
    },
    low: {
      numbers: false,
      uppercase: true,
      lowercase: true,
      specialSymbols: false,
      length: 8,
    },
    medium: {
      numbers: true,
      uppercase: true,
      lowercase: true,
      specialSymbols: false,
      length: 16,
    },
    high: {
      numbers: true,
      uppercase: true,
      lowercase: true,
      specialSymbols: true,
      length: 32,
    },
  },
};
