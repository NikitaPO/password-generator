import {Component, HostBinding, Input} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';

import {lineAppearAnimation} from '../../../constants/animations';
import {TooltipNotifierService} from '../../tooltip-notifier/tooltip-notifier.service';


@Component({
  selector: 'app-password-line',
  template: `
    <div class="password-line__wrapper" (click)="onClick($event)">
      <div class="password-line__password-text-wrapper password-text">
        <span class="password-text__content">{{password}}</span>
        <span class="password-text__difficulty">{{difficulty}}</span>
      </div>
      <div class="password-line__info-block info-block">
        <app-icon type="copy" height="26" width="24"></app-icon>
        <div class="info-block__text">Click to copy</div>
      </div>
    </div>
  `,
  styleUrls: ['./password-line.component.scss'],
  animations: [lineAppearAnimation],
})
export class PasswordLineComponent {
  @Input() password: string;
  @Input() difficulty: string = '';

  @HostBinding('@lineAppearAnimation') lineAppearAnimation;

  constructor(
    private clipboardApi: ClipboardService,
    private tooltipNotifierService: TooltipNotifierService,
  ) {
  }

  onClick(event: MouseEvent): void {
    const notificationText = 'Password copied!';

    this.tooltipNotifierService.showNotification(
      notificationText,
      {x: event.pageX, y: event.pageY},
      800,
    );

    this.clipboardApi.copyFromContent(this.password);
  }
}
