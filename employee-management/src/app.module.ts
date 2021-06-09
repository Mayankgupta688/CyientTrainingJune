import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SalutationComponent } from "./components/salutation/salutation.component";
import { TrainingDetailsComponent } from "./components/trainingDetails/trainingDetails.component";
import { AppStartComponent } from "./container/appStart/app.start.component";
import { DataBindingComponent } from "./components/dataBinding/data.binding.component";
import { EmployeeInfoComponent } from "./components/employeeInfo/employee.info.component";

@NgModule({
   declarations: [ 
      SalutationComponent, 
      TrainingDetailsComponent, 
      AppStartComponent,
      DataBindingComponent,
      EmployeeInfoComponent 
   ],
   imports: [ BrowserModule ],
   bootstrap: [ EmployeeInfoComponent ]
})
export class ApplicationModule {}