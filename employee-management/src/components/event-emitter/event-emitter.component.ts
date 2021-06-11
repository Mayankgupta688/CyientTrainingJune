import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent {

  constructor() {
    this.changeNameEvent.subscribe((data) => {
      this.name = data;
    })

    this.changeNameEvent.subscribe(() => {
      this.generalMessage = "Hello World...."
    })
  }
  
  generalMessage = "";
  changeNameEvent = new EventEmitter<string>();

  name = "Mayank";

  updateName() {
    this.changeNameEvent.emit("Anshul Gupta");
  }

}
