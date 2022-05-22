import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-password-line',
  template: `
    <div class="password-line__wrapper">
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
})
export class PasswordLineComponent {
  @Input() password: string;
  @Input() difficulty: string = '';
}
