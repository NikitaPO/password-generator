import {Component} from '@angular/core';

@Component({
  selector: 'app-block-title',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./block-title.component.scss'],
})
export class BlockTitleComponent {
}
