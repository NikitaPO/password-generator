export type PasswordStrength = 'low' | 'medium' | 'bad' | 'high';
export type SymbolVariation = 'numbers' | 'uppercase' | 'lowercase' | 'specialSymbols'

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export interface PasswordGeneratorConfig {
  minLength: number,
  maxLength: number,
  passwordsCount: number,
  strengthTypes: {
    [T in PasswordStrength]: PasswordGenerationConfig
  }
}

export interface PasswordGenerationConfig extends Record<SymbolVariation, boolean> {
  length: number,
}

export interface PasswordItem {
  text: string,
  difficulty: string
}
