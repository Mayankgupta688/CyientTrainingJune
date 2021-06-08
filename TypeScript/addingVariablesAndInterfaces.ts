interface IAddress {
    street: string;
    country: string
}

var otherAddress: IAddress = {
    street: "dfgd",
    country: "India"
}

console.log(otherAddress.country);

class EmployeeClassOther {

    private address: IAddress = {
        street: "1",
        country: "India"
    }

    previousSalary: number[] = [10, 20, 30];

    nameArray: Array<string> = ["Mayank", "Xyz", "Abc"]

    name: string = "";

    constructor(name: string, public age: number, private designation: string, private salary: number = 10) { }

    getName() {
        alert(this.name)
    }

    getDesignation() {
        console.log(this.designation)
        console.log(this.address.country)
    }

    getAddress() {
        return this.address
    }
}

var employee = new EmployeeClassOther("Mayank", 20, "Trainer");
console.log(employee.getAddress().country)
employee.getDesignation()

var employeeOne = new EmployeeClass("Anshul", 20, "Trainer", 12);
employeeOne.getName()

