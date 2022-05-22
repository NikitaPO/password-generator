import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {BaseElementsModule} from '@shared/base-elements/base-elements.module';

import {PasswordGeneratorComponent} from './password-generator.component';
import {IconModule} from '../icons/icon.module';
import {BlockModule} from '../block/block.module';
import {LinearSelectorModule} from '../linear-selector/linear-selector.module';
import {FormFieldsModule} from '@shared/form-fields/form-fields.module';
import {PasswordLineComponent} from './password-line/password-line.component';


@NgModule({
  declarations: [
    PasswordGeneratorComponent,
    PasswordLineComponent,
  ],
  imports: [
    CommonModule,
    BaseElementsModule,
    ReactiveFormsModule,
    IconModule,
    BlockModule,
    LinearSelectorModule,
    FormFieldsModule,
  ],
})
export class PasswordGeneratorModule {
}
