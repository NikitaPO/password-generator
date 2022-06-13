import {Directive, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appTooltipNotificationHost]',
})
export class TooltipNotificationHostDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
  ) {
  }
}
