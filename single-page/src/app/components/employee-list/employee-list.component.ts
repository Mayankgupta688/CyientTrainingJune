import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{

  empList = [];
  displayName = "";

  timeOutput = "jkdgfsdjkgfsdgk";

  constructor(private empService: EmployeeServiceService, private _http: HttpClient) { 
    debugger;
    setTimeout(() => {
        this.timeOutput = "hdgfsdhkfg";
      }, 5000)
    }


    ngOnChanges(changes) {
      debugger;
    }

    ngOnInit() {
      debugger;
      this._http.get("http://localhost:3000/employees").subscribe((data: any) => {
        this.empList = data;
      })
    } 

    ngOnContentInit() {

    }

    ngOnViewInit() {
      
    }
}
