export type PasswordStrengthConfig = Record<PasswordStrength, PasswordStrengthBody>;

export type PasswordStrength = 'low' | 'medium' | 'bad' | 'high';

export type PasswordStrengthBody = {
  numbers: boolean,
  uppercase: boolean,
  lowercase: boolean,
  symbols: boolean,
  length: number,
};
