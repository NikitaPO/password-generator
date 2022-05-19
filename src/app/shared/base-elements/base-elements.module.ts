import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LinkComponent} from './link/link.component';
import {ButtonComponent} from './button/button.component';


@NgModule({
  declarations: [
    LinkComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LinkComponent,
    ButtonComponent,
  ],
})
export class BaseElementsModule {
}
