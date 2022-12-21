import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatTag]'
})
export class RepTagDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<number>) { }

  @Input() set repeatTag(repeat: number) {
    for (let i = 0; i < repeat; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

}
