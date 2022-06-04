import {PasswordGenerationConfig} from '../../types';
import {lettersLowercase, lettersUppercase, numCharacters, specialSymbols} from '../../constants/password-symbols';


export function generatePasswordByConfig(config: PasswordGenerationConfig): string {
  let symbols = '';
  let newPassword = '';
  const isAllConfigParametersDisabled = Object.values(config)
    .filter(val => typeof val !== 'number')
    .every(value => !value);

  if (config.lowercase || isAllConfigParametersDisabled) {
    symbols += lettersLowercase;
    newPassword += getRandomSymbolFromString(lettersLowercase);
  }

  if (config.uppercase) {
    symbols += lettersUppercase;
    newPassword += getRandomSymbolFromString(lettersUppercase);
  }

  if (config.numbers) {
    symbols += numCharacters;
    newPassword += getRandomSymbolFromString(numCharacters);
  }

  if (config.specialSymbols) {
    symbols += specialSymbols;
    newPassword += getRandomSymbolFromString(specialSymbols);
  }

  for (let i = newPassword.length; i < config.length; i++) {
    newPassword += getRandomSymbolFromString(symbols);
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
