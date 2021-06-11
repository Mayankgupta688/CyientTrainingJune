import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { IEmployee } from 'src/interfaces/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

   constructor(private _http: HttpClient) {
        this.getEmployees();
   }

   getEmployees() {
      this._http.get("http://localhost:3000/employees").subscribe((data: IEmployee[]) => {
         this.employeeDetails = data;
         this.dataUpdatedEvent.emit("Data Updated")
      })
   }

   dataUpdatedEvent = new EventEmitter<string>()

   employeeDetails: IEmployee[] = [];

   deleteEmployee(empId) {
      debugger;
      this.employeeDetails = this.employeeDetails.filter((employee) => {
         return employee.id != empId
      })

      this.dataUpdatedEvent.emit("Data Updated")
   }

   deleteEmployeeFromApi(empId) {
      this._http.delete("http://localhost:3000/employees/" + empId).subscribe(() => {
         alert("Employee Deleted");
         this.getEmployees();
      })

      this.dataUpdatedEvent.emit("Data Updated")
   }

   addEmployee(name, id, avatar, createdAt, color) {
      this._http.post("http://localhost:3000/employees", {
         name, 
         id, 
         createdAt, 
         avatar, 
         color
      }).subscribe(() => {
         alert("Data Added...");
         this.getEmployees();
      })
   }
}
