export interface PasswordGeneratorConfig {
  minLength: number,
  maxLength: number,
  passwordsCount: number,
  strengthTypes: {
    [T in PasswordStrength]: PasswordGenerationConfig
  }
}

export type PasswordStrength = 'low' | 'medium' | 'bad' | 'high';

export type PasswordGenerationConfig = {
  numbers: boolean,
  uppercase: boolean,
  lowercase: boolean,
  specialSymbols: boolean,
  length: number,
};

export interface PasswordItem {
  text: string,
  difficulty: string
}
