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

  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
    debugger;
    this.empList = this.empService.employeeDetails;
    this.subscribeEvent();
  }

  subscribeEvent() {
    debugger;
    this.empService.dataUpdatedEvent.subscribe((data) => {
      debugger
      this.empList = this.empService.employeeDetails;
    });
  }

  updateName(empName) {
    debugger;
    this.displayName = empName;
  }

  ngOnDestroy() {
    this.empService.dataUpdatedEvent.unsubscribe()
  }

}
