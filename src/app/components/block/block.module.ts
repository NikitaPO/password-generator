import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlockComponent} from './block.component';
import {BlockTitleComponent} from './block-label/block-title.component';
import {BlockDescriptionComponent} from './block-description/block-description.component';


@NgModule({
  declarations: [
    BlockComponent,
    BlockTitleComponent,
    BlockDescriptionComponent,
  ],
  exports: [
    BlockComponent,
    BlockTitleComponent,
    BlockDescriptionComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class BlockModule {
}
