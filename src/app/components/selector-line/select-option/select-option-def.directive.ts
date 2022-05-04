import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appSelectOptionDef]',
})
export class SelectOptionDefDirective {
  @Input('appSelectOptionDefContext') context;

  constructor(
    public template: TemplateRef<SelectOptionContext>,
  ) {
  }
}

export interface SelectOptionContext {
  context: any;
}

