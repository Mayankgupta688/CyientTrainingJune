import { Component } from "@angular/core";
import { IEmployee, IManager, ILead } from "../../interfaces/IEmployee";

@Component({
    selector: "employee-info",
    templateUrl: "./employee.info.component.html",
    styleUrls: ["./employee.info.component.css"]
})
export class EmployeeInfoComponent {

    constructor() {
        setTimeout(() => {
            this.changeText()
        }, 5000)
    }

    employeeDetails: IEmployee[] = [
        {
           "id":"",
           "createdAt":"2018-12-03T11:37:42.015Z",
           "name":"Meha",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        },
        {
           "id":"2",
           "createdAt":"2018-12-02T21:06:49.825Z",
           "name":"Roxanne Kunde",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        },
        {
           "id":"3",
           "createdAt":"2018-12-03T03:37:39.995Z",
           "name":"Dante Spencer",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        },
        {
           "id":"4",
           "createdAt":"2018-12-03T11:07:34.261Z",
           "name":"Benny Hartmann",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        },
        {
           "id":"5",
           "createdAt":"2018-12-03T11:38:36.583Z",
           "name":"Easton Fisher",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        },
        {
           "id":"6",
           "createdAt":"2018-12-02T17:48:52.784Z",
           "name":"Mrs. Brandi Grant",
           "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
           color: "grey"
        }, {
            "id":"7",
            "createdAt":"2018-12-02T17:48:52.784Z",
            "name":"Mayank",
            "avatar":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
            color: "grey"
    }];

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