import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TooltipNotifierService} from './tooltip-notifier.service';
import {TooltipNotificationComponent} from './tooltip-notification.component';
import {TooltipNotificationHostDirective} from './tooltip-notification-host.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TooltipNotificationComponent,
    TooltipNotificationHostDirective,
  ],
  providers: [
    TooltipNotifierService,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TooltipNotificationComponent,
    TooltipNotificationHostDirective,
  ],
})
export class TooltipNotifierModule {
}
