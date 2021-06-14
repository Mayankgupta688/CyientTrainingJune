import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SalaryComponent } from './feature/salary/salary.component';
import { OtherComponent } from './feature/other/other.component';

@NgModule({
    declarations: [ 
        SalaryComponent,
        OtherComponent
    ],
    imports: [ BrowserModule ],
    exports: [ SalaryComponent, OtherComponent ]
 })
 export class FeatureModule {}
