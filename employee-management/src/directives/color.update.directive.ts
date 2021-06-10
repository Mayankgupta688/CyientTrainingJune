import { Directive, ElementRef, Input} from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export class ColorUpdateDirective {
    @Input() applyColor: string
    constructor(private element: ElementRef) {
        debugger;
        setTimeout(() => {
            this.element.nativeElement.style.color = this.applyColor;
        }, 3000);
    }
}