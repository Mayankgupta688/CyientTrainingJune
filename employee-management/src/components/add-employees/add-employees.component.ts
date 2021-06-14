import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {

  name: string = "";
  id = "";
  createdAt = "";
  avatar = "";
  color = "";

  @ViewChildren(NgModel) userInputReference: QueryList<NgModel>

  constructor(private empService: EmployeeServiceService) { }

  ngAfterViewInit() {
    this.userInputReference["_results"][0].valueChanges.subscribe((data) => {
      debugger;
    })

    this.userInputReference.changes.subscribe((data) => {
      debugger;
    })
  }

  addDetails() {

    debugger;

    debugger;
    this.empService.addEmployee(this.name, this.id, this.avatar, this.createdAt, this.color);
    this.clearForm();
  }

  clearForm() {
    this.name = "";
    this.id = "";
    this.createdAt = "";
    this.avatar = "";
    this.color = "";
  }

}
