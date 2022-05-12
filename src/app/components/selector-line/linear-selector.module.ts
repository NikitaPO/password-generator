import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {LinearSelectorComponent} from './linear-selector.component';
import {SelectOptionComponent} from './select-option/select-option.component';


@NgModule({
  declarations: [
    LinearSelectorComponent,
    SelectOptionComponent,
  ],
  exports: [
    LinearSelectorComponent,
    SelectOptionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LinearSelectorModule {
}
