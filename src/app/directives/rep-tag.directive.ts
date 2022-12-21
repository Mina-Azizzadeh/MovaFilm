import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repatTag]'
})
export class RepTagDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<number>) { }

  @Input() set repatTag(repeat: number) {
    for (let i = 0; i < repeat; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

}
