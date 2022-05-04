import {NgModule} from '@angular/core';

import {LinearSelectorComponent} from './linear-selector.component';
import {SelectOptionDefDirective} from './select-option/select-option-def.directive';
import {SelectOptionDirective} from './select-option/select-option.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    LinearSelectorComponent,
    SelectOptionDirective,
    SelectOptionDefDirective,
  ],
  exports: [
    LinearSelectorComponent,
    SelectOptionDirective,
    SelectOptionDefDirective,
  ],
  imports: [
    CommonModule,
  ],
})
export class LinearSelectorModule {
}
