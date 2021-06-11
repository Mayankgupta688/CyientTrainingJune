import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  @Input() employee;
  @Output() notifyParentEvent = new EventEmitter<string>();

  constructor(private _dataService: EmployeeServiceService) {}

  deleteEmployee(employee) {
    debugger;
    this._dataService.deleteEmployee(employee.id);
  }

  notifyParent(empName) {
    debugger;
    this.notifyParentEvent.emit(empName);
  }

}
