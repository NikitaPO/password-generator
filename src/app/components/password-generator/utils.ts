import {PartialRecord, PasswordGenerationConfig, SymbolVariation} from '../../types';
import {symbolsByTypes} from '../../constants/password-symbols';

export function generatePasswordByConfig(config: PasswordGenerationConfig): string {
  let newPassword = '';
  const symbols: PartialRecord<SymbolVariation, string> = {};

  for (let [key, value] of Object.entries(config)) {
    if (key !== 'length' && value) {
      symbols[key] = symbolsByTypes[key];
    }
  }

  if (Object.keys(symbols).length === 0) {
    symbols['lowercase'] = symbolsByTypes['lowercase'];
  }

  const symbolVariations = Object.keys(symbols) as SymbolVariation[];
  for (const symbolType of symbolVariations) {
    newPassword += getRandomSymbolFromString(symbols[symbolType] as string);
  }

  for (let i = newPassword.length; i < config.length; i++) {
    const symbolType = symbolVariations[getRandomNumber(symbolVariations.length - 1)];
    newPassword += getRandomSymbolFromString(symbols[symbolType] as string);
  }

  return shuffleString(newPassword);
}

export function deepEqualObjects(obj1: object, obj2: object): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function getRandomNumber(max: number, min = 0): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomSymbolFromString(str: string): string {
  return str[getRandomNumber(str.length - 1)];
}

function shuffleString(str: string): string {
  return str.split('').sort(() => 0.5 - Math.random()).join('');
}
