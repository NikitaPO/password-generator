import {Injectable} from '@angular/core';


@Injectable()
export class LocalStorageService {
  private _storagePrefix = '';

  setPrefix(prefix: string): void {
    this._storagePrefix = prefix;
  }

  storeVariable(variableName: string, value: any): void {
    if (!value) {
      return;
    }

    let valueToStore = value;
    if (value && typeof value === 'object') {
      valueToStore = JSON.stringify(value);
    }

    localStorage.setItem(this._storagePrefix + variableName, valueToStore);
  }

  getVariable(variableName: string): any {
    let valueFromStorage = localStorage.getItem(this._storagePrefix + variableName);

    if (!valueFromStorage) {
      return;
    }

    let parsedValue;
    try {
      parsedValue = JSON.parse(valueFromStorage);
    } catch {
      return valueFromStorage;
    }

    return parsedValue;
  }
}
