import {SymbolVariation} from '../types';

export const symbolsByTypes: Record<SymbolVariation, string> = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIKLMOPQRSTUVWXYZ',
  numbers: '0123456789',
  specialSymbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};
