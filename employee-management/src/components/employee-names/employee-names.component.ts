import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/services/employee-service.service';

@Component({
  selector: 'employee-names',
  templateUrl: './employee-names.component.html',
  styleUrls: ['./employee-names.component.css'],
})
export class EmployeeNamesComponent implements OnInit {

  employeeList = [];

  constructor(private dataService: EmployeeServiceService) { 
    this.employeeList = dataService.employeeDetails;
  }

  ngOnInit(): void {
  }

}
