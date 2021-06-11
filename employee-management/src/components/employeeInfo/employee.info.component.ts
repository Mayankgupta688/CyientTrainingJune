import { Component } from "@angular/core";
import { EmployeeServiceService } from "src/services/employee-service.service";
import { IEmployee } from "../../interfaces/IEmployee";

@Component({
    selector: "employee-info",
    templateUrl: "./employee.info.component.html",
    styleUrls: ["./employee.info.component.css"]
})
export class EmployeeInfoComponent {

    constructor(private dataService: EmployeeServiceService) {
        setTimeout(() => {
            this.changeText();
            this.employeeDetails = dataService.employeeDetails;
        }, 5000)
    }

    classAssociation = "randomClass"

    contentColor: string = "blue";
    contentBackgroundColor = "red";

    employeeDetails: IEmployee[] = [];

    

    buttonText = "Delete All Employee";
    buttonId = "sample_button"

    onMouseEnter(employee: IEmployee) {
        employee.color = "aqua";
    }

    onMouseLeave(employee: IEmployee) {
        employee.color = "grey";
    }

    addEmployeeToTheList() {
        this.employeeDetails.push({
            id: "8",
            createdAt: "Today",
            name: "Mayank Gupta",
            avatar: "Sample Image",
            color: "white"
            
        });
    }

    changeText() {
        this.buttonText = "Random Text"
    }
}