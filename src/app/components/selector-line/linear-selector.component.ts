import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import {SelectOptionDefDirective} from './select-option/select-option-def.directive';
import {SelectOptionDirective} from './select-option/select-option.directive';


@Component({
  selector: 'app-linear-selector',
  templateUrl: './linear-selector.component.html',
  styleUrls: ['./linear-selector.component.scss'],
})
export class LinearSelectorComponent implements AfterContentInit {
  @ContentChildren(SelectOptionDefDirective, {}) selectOptions: QueryList<SelectOptionDefDirective>;

  ngAfterContentInit() {
    console.log('selectOptions', this.selectOptions);

    const result = this.selectOptions.find(item => item.context === 44)
  }
}
