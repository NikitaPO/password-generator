import {Component, HostBinding, Input} from '@angular/core';


export type ButtonType = 'basic';

@Component({
  selector: 'a[appBtn], button[appBtn]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('appBtn')
  @HostBinding('attr.appBtn') btnType: ButtonType = 'basic';
}
