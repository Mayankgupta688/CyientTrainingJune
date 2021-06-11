import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'reactive-add-employees',
  templateUrl: './reactive-add-employees.component.html',
  styleUrls: ['./reactive-add-employees.component.css']
})
export class ReactiveAddEmployeesComponent {
 
  employeeDetails = new FormGroup({
    name: new FormControl("", Validators.required),
    id: new FormControl("", Validators.required),
    createdAt: new FormControl("", Validators.required),
    avatar: new FormControl("", Validators.required),
    color: new FormControl("", [Validators.required, Validators.min(3), Validators.max(10)]),
  });

  constructor(private empService: EmployeeServiceService) { }

  addDetails() {
    this.empService.addEmployee(
      this.employeeDetails.value.name,
      this.employeeDetails.value.id,
      this.employeeDetails.value.avatar,
      this.employeeDetails.value.createdAt,
      this.employeeDetails.value.color,
      )
  }

  clearForm() {
  }
}
