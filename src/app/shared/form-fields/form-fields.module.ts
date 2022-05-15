import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckboxComponent} from './checkbox/checkbox.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NumberComponent} from './number/number.component';
import {IconModule} from '../../components/icons/icon.module';


@NgModule({
  declarations: [
    CheckboxComponent,
    NumberComponent,
  ],
  exports: [
    CheckboxComponent,
    NumberComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
  ],
})
export class FormFieldsModule {
}
