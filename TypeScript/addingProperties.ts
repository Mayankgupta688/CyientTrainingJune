class Employee {

    name: string = "";
    age: number = 0;
    designation: string = ""

    constructor(userName: string, userAge: number, userDesignation: string) {
        this.name = userName;
        this.age = userAge;
        this.designation = userDesignation
    }

    getName() {
        alert(this.name)
    }
}

var employee = new Employee("Mayank", 20, "Trainer");
employee.getName()

var employeeOne = new Employee("Anshul", 20, "Trainer");
employeeOne.getName()
