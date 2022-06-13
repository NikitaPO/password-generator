import {PasswordStrength, SymbolVariation} from '../types';

export const symbolsByTypes: Record<SymbolVariation, string> = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIKLMOPQRSTUVWXYZ',
  numbers: '0123456789',
  specialSymbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};

export const passwordEntropyLevels: Record<PasswordStrength, number> = {
  bad: 32,
  low: 64,
  medium: 128,
  high: 256,
};
