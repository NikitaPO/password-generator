import {Component} from '@angular/core';

@Component({
  selector: 'a[link]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['link.component.scss'],
  host: {
    target: '_blank',
  },
})
export class LinkComponent {
}
