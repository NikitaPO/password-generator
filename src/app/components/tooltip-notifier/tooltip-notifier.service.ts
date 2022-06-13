import {Injectable, ViewContainerRef} from '@angular/core';

import {TooltipNotificationComponent} from './tooltip-notification.component';
import {TooltipNotificationHostDirective} from './tooltip-notification-host.directive';


@Injectable()
export class TooltipNotifierService {
  hostView: ViewContainerRef;

  connect(tooltipHost: TooltipNotificationHostDirective): void {
    this.hostView = tooltipHost.viewContainerRef;
  }

  showNotification(text: string, coords: { x: number, y: number }, showTime: number): void {
    const componentRef = this.hostView.createComponent<TooltipNotificationComponent>(TooltipNotificationComponent);
    componentRef.instance.text = text;
    componentRef.instance.showTime = showTime;
    componentRef.instance.left = coords.x + 'px';
    componentRef.instance.top = coords.y + 'px';
    setTimeout(() => componentRef.destroy(), showTime);
  }
}
