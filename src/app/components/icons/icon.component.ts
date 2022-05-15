import {Component, Input} from '@angular/core';

import './icons'


@Component({
  selector: 'app-icon',
  template: `
    <svg [attr.height]="height + 'px'" [attr.width]="width + 'px'">
      <use [attr.xlink:href]="('#app-icon-' + type)"></use>
    </svg>
  `,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() height: string | number = 15;
  @Input() width: string | number = 15;

  @Input() type!: string;
}
