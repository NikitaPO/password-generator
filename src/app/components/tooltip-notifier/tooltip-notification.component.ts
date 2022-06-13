import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
  selector: 'app-tooltip-notification',
  template: `
    <div class="tooltip-notification">
      <ng-container>{{text}}</ng-container>
    </div>
  `,
  styleUrls: ['./tooltip-notifier.component.scss'],
})
export class TooltipNotificationComponent implements OnInit {
  text = '';
  showTime: number;
  leaveAnimationTime = 100;

  @HostBinding('style.top')
  top = '0px';

  @HostBinding('style.left')
  left = '0px';

  @HostBinding('style.animation')
  animation;

  ngOnInit() {
    setTimeout(
      () => this.animation = `leave ${this.leaveAnimationTime}ms linear forwards`,
      this.showTime - this.leaveAnimationTime,
    );
  }
}
