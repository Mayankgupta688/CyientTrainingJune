import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[delayRendering]'
})
export class DelayRenderingDirective {
    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {}

    ngOnInit() {
        setTimeout(() => {
            this.container.createEmbeddedView(null)
        }, 5000)
    }
}