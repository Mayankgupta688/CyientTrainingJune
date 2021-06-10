import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'using-switch',
  templateUrl: './using-switch.component.html',
  styleUrls: ['./using-switch.component.css']
})
export class UsingSwitchComponent implements OnInit {

  name = "Mayank";

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name = "Anshul"
  }

}
