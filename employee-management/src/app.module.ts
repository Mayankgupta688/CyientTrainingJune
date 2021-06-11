import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SalutationComponent } from "./components/salutation/salutation.component";
import { TrainingDetailsComponent } from "./components/trainingDetails/trainingDetails.component";
import { AppStartComponent } from "./container/appStart/app.start.component";
import { DataBindingComponent } from "./components/dataBinding/data.binding.component";
import { EmployeeInfoComponent } from "./components/employeeInfo/employee.info.component";
import { UsingSwitchComponent } from './components/using-switch/using-switch.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { DelayRenderingDirective } from "./directives/delay.rendering.directive";
import { UsingStructuralDirectiveComponent } from './components/using-structural-directive/using-structural-directive.component';
import { UsingAttributeDirectiveComponent } from './components/using-attribute-directive/using-attribute-directive.component';
import { ColorUpdateDirective } from "./directives/color.update.directive";
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from"@angular/forms";
import { EmployeeNamesComponent } from './components/employee-names/employee-names.component';
import { EventEmitterComponent } from './components/event-emitter/event-emitter.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component'
@NgModule({
   declarations: [ 
      SalutationComponent, 
      TrainingDetailsComponent, 
      AppStartComponent,
      DataBindingComponent,
      EmployeeInfoComponent,
      UsingSwitchComponent,
      SampleComponentComponent,
      DelayRenderingDirective,
      UsingStructuralDirectiveComponent,
      UsingAttributeDirectiveComponent,
      ColorUpdateDirective,
      TwoWayComponent,
      EmployeeNamesComponent,
      EventEmitterComponent,
      EmployeeListComponent,
      EmployeeDetailsComponent
   ],
   imports: [ BrowserModule, FormsModule ],
   bootstrap: [ EmployeeListComponent ]
})
export class ApplicationModule {}