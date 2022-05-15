export interface PasswordGeneratorConfig {
  minLength: number,
  maxLength: number,
  strengthTypes: {
    [T in PasswordStrength]: PasswordStrengthBody
  }
}

export type PasswordStrength = 'low' | 'medium' | 'bad' | 'high';

export type PasswordStrengthBody = {
  numbers: boolean,
  uppercase: boolean,
  lowercase: boolean,
  symbols: boolean,
  length: number,
};
