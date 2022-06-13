export type PasswordStrength = 'bad' | 'low' | 'medium' | 'high';
export type SymbolVariation = 'numbers' | 'uppercase' | 'lowercase' | 'specialSymbols';

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export interface PasswordGeneratorConfig {
  minLength: number,
  maxLength: number,
  passwordsCount: number,
  storagePrefix: string,
  strengthTypes: {
    [T in PasswordStrength]: PasswordGenerationConfig
  }
}

export interface PasswordItem {
  text: string,
  difficulty: string
}

export interface PasswordGenerationConfig extends Record<SymbolVariation, boolean> {
  length: number,
}

export function isInstanceOfPasswordGenerationConfig(value: any): boolean {
  if (
    typeof value !== 'object' ||
    !value.hasOwnProperty('strength') || !value.hasOwnProperty('custom') ||
    typeof value.strength !== 'string' || typeof value.custom !== 'object'
  ) {
    return false;
  }

  const customBooleanProperties = ['numbers', 'uppercase', 'lowercase', 'specialSymbols'];
  const customNumberProperties = ['length'];

  for (const key of [...customBooleanProperties, ...customNumberProperties]) {
    if (!value.custom.hasOwnProperty(key)) {
      console.log('return false');
      return false;
    }
  }

  for (const [key, val] of Object.entries(value.custom)) {
    if (
      typeof val === 'number' && !customNumberProperties.includes(key) ||
      typeof val === 'boolean' && !customBooleanProperties.includes(key) ||
      typeof val === 'object'
    ) {
      return false;
    }
  }

  return true;
}
