import {Component, Input} from '@angular/core';

import './icons'


@Component({
  selector: 'app-icon',
  template: `
    <svg [attr.height]="height + 'px'" [attr.width]="width + 'px'" [attr.fill]="fill" [attr.stroke]="stroke">
      <use [attr.xlink:href]="('#app-icon-' + type)"></use>
    </svg>
  `,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() height: string | number = 15;
  @Input() width: string | number = 15;
  @Input() fill: string = 'inherit';
  @Input() stroke: string = 'inherit';
  @Input() type!: string;
}
