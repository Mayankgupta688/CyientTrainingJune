import { Component } from "@angular/core"

@Component({
    selector: "data-binding",
    templateUrl: "./data.binding.component.html",
    styleUrls: ["./data.binding.component.css"]
})
export class DataBindingComponent {

    currentTime = "";
    counter = 0;
    constructor() {
        this.currentTime = this.getCurrentTime();

        setInterval(() => {
            this.currentTime = this.getCurrentTime();
        }, 1000)
    }

    getCurrentTime() {
        return `
            ${new Date().getHours()} : 
            ${new Date().getMinutes()} : 
            ${new Date().getSeconds()}`;
    }

    userName: string = "Anshul Gupta";

    updateUserName() {
        this.userName = "TechnoFunnel";
    }

    updateCounter() {
        this.counter += 1;
    }

    getUserDetails() {
        return "User is new to TechnoFunnel";
    }
}