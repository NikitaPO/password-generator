import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {BaseElementsModule} from '@shared/base-elements/base-elements.module';

import {PasswordGeneratorComponent} from './password-generator.component';
import {IconModule} from '../icons/icon.module';


@NgModule({
  declarations: [
    PasswordGeneratorComponent,
  ],
  imports: [
    CommonModule,
    BaseElementsModule,
    ReactiveFormsModule,
    IconModule,
  ],
})
export class PasswordGeneratorModule {
}
