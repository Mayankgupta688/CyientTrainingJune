import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{

  empList = [];
  displayName = "";

  constructor(private empService: EmployeeServiceService) { 
    this.empList = this.empService.employeeDetails;

    this.empService.dataUpdatedEvent.subscribe((data) => {
      alert(data);
      this.empList = this.empService.employeeDetails;
    });
  }

  updateName(empName) {
    debugger;
    this.displayName = empName;
  }

}
