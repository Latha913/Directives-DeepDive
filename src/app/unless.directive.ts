import { ViewContainerRef } from '@angular/core';
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    console.log('checking')
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);

    }
    else{
      this.vcRef.clear();

    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
