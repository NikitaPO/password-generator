import {Component, HostBinding, Input} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';

import {lineAppearAnimation} from '../../../constants/animations';


@Component({
  selector: 'app-password-line',
  template: `
    <div class="password-line__wrapper" (click)="onClick()">
      <div class="password-line__password-text password-text">
        {{password}}
        <span class="password-text__difficulty">{{difficulty}}</span>
      </div>
      <div class="password-line__info-block info-block">
        <app-icon type="copy" height="26" width="24"></app-icon>
        <div class="info-block__text">Click to copy</div>
      </div>
    </div>
  `,
  styleUrls: ['./password-line.component.scss'],
  animations: [lineAppearAnimation]
})
export class PasswordLineComponent {
  @Input() password: string;
  @Input() difficulty: string = '';

  @HostBinding('@lineAppearAnimation') lineAppearAnimation;

  constructor(
    private clipboardApi: ClipboardService,
  ) {
  }

  onClick() {
    this.clipboardApi.copyFromContent(this.password);
  }
}
