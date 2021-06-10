import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  name: string = "Mayank";
  age = "10";
  designation = "Developer";
  salary = "100";
  bonus = "10";

  updateName() {
    this.name = "Anshul Gupta"
  }

  showData() {
    debugger;
    alert(this.name);
    alert(this.age);
    alert(this.designation);
    alert(this.salary);
    alert(this.bonus);
  }

}
