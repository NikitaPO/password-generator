import {Component, ElementRef, HostBinding, HostListener, Inject, Input, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';


export type ButtonType = 'basic';

@Component({
  selector: 'a[appBtn], button[appBtn]',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ButtonComponent {
  @Input('appBtn')
  @HostBinding('attr.appBtn') btnType: ButtonType = 'basic';

  @Input()
  @HostBinding('attr.circleAnimation')
  circleAnimation: boolean;

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    if (this.circleAnimation) {
      this.createCircle(event.clientX, event.clientY);
    }
  }

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  private createCircle(x: number, y: number): void {
    const hostElement = this.elementRef.nativeElement;
    const hostCoords = hostElement.getBoundingClientRect();

    if (hostElement.querySelector('.circle-element')) {
      this.removeCircle();
    }

    const circle = this.document.createElement('span');
    circle.classList.add('circle-element');

    const diameter = Math.max(hostElement.clientWidth, hostElement.clientHeight);
    const radius = diameter / 2;

    circle.style.height = `${radius * 2}px`;
    circle.style.width = `${radius * 2}px`;

    circle.style.top = `${y - hostCoords.y - radius}px`;
    circle.style.left = `${x - hostCoords.x - radius}px`;

    hostElement.appendChild(circle);
  }

  private removeCircle() {
    const hostElement = this.elementRef.nativeElement;
    hostElement.querySelector('.circle-element').remove();
  }
}
