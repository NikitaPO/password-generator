import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BaseElementsModule} from '@shared/base-elements/base-elements.module';

import {PasswordGeneratorComponent} from './password-generator.component';


@NgModule({
  declarations: [
    PasswordGeneratorComponent,
  ],
  imports: [
    CommonModule,
    BaseElementsModule,
  ],
})
export class PasswordGeneratorModule {
}
