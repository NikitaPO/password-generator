import {Component, Inject, OnInit, ViewChild} from '@angular/core';

import {LocalStorageService} from '@shared/local-storage/local-storage.service';

import {TooltipNotificationHostDirective} from './components/tooltip-notifier/tooltip-notification-host.directive';
import {TooltipNotifierService} from './components/tooltip-notifier/tooltip-notifier.service';
import {PASSWORD_GENERATOR_CONFIG} from './configs';
import {PasswordGeneratorConfig} from './types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(TooltipNotificationHostDirective, {static: true}) tooltipHost: TooltipNotificationHostDirective;

  constructor(
    private tooltipNotifierService: TooltipNotifierService,
    private localStorageService: LocalStorageService,
    @Inject(PASSWORD_GENERATOR_CONFIG) private config: PasswordGeneratorConfig,
  ) {
  }

  ngOnInit() {
    this.tooltipNotifierService.connect(this.tooltipHost);
    this.localStorageService.setPrefix(this.config.storagePrefix);
  }
}
