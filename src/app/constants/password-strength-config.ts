import {InjectionToken} from '@angular/core';

import {PasswordStrengthConfig} from '../types';


export const PASSWORD_STRENGTH_CONFIG = new InjectionToken('passwordStrengthConfig', {
  providedIn: 'root',
  factory: () => passwordStrengthConfig,
});

export const passwordStrengthConfig: PasswordStrengthConfig = {
  bad: {
    numbers: false,
    uppercase: false,
    lowercase: false,
    symbols: false,
    length: 8,
  },
  low: {
    numbers: false,
    uppercase: true,
    lowercase: true,
    symbols: false,
    length: 15,
  },
  medium: {
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
    length: 25,
  },
  high: {
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
    length: 40,
  },
};
