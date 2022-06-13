import {Component, OnInit, ViewChild} from '@angular/core';

import {TooltipNotificationHostDirective} from './components/tooltip-notifier/tooltip-notification-host.directive';
import {TooltipNotifierService} from './components/tooltip-notifier/tooltip-notifier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(TooltipNotificationHostDirective, {static: true}) tooltipHost: TooltipNotificationHostDirective;

  constructor(
    private tooltipNotifierService: TooltipNotifierService,
  ) {
  }

  ngOnInit() {
    this.tooltipNotifierService.connect(this.tooltipHost);
  }
}
