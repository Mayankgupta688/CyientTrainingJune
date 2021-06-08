class EmployeeClass {

    constructor(public name: string, public age: number, public designation: string) { }

    getName() {
        alert(this.name)
    }
}

var employee = new EmployeeClass("Mayank", 20, "Trainer");
employee.getName()

var employeeOne = new EmployeeClass("Anshul", 20, "Trainer");
employeeOne.getName()

