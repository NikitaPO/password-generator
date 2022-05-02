import {Component, Input} from '@angular/core';

import './icons'

@Component({
  selector: 'app-icon',
  template: `
    <svg>
      <use [attr.xlink:href]="('#app-icon-' + type)"></use>
    </svg>
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input()
  type!: string;
}
