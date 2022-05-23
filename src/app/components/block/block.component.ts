import {Component} from '@angular/core';


@Component({
  selector: 'app-block',
  template: `
    <ng-content select="app-block-title"></ng-content>
    <ng-content select="app-block-description"></ng-content>
    <ng-content></ng-content>
  `,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
}
