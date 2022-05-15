import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {BaseElementsModule} from '@shared/base-elements/base-elements.module';

import {PasswordGeneratorComponent} from './password-generator.component';
import {IconModule} from '../icons/icon.module';
import {BlockModule} from '../block/block.module';
import {LinearSelectorModule} from '../selector-line/linear-selector.module';
import {FormFieldsModule} from '@shared/form-fields/form-fields.module';


@NgModule({
  declarations: [
    PasswordGeneratorComponent,
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
