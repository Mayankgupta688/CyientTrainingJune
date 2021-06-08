import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SalutationComponent } from "./components/salutation/salutation.component"

@NgModule({
   declarations: [ SalutationComponent ],
   imports: [ BrowserModule ],
   bootstrap: [ SalutationComponent ]
})
export class ApplicationModule {}