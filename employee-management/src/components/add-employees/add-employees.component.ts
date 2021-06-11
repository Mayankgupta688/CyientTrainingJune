import { Component, OnInit } from '@angular/core';
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

  constructor(private empService: EmployeeServiceService) { }

  addDetails() {
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
