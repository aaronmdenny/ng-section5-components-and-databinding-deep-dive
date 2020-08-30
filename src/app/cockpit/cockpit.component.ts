import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * We create properties for each event that will be fired from this child component to the parent component.
   * 
   * These properteis are of type EventEmitter<T> where T is the type of data that will be sent in the event.
   * 
   * We use the @Output() decorator to make a property able to be listened to from outside.
   */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * We call emit() on the EventEmitter to emit the event when onAddServer() is called in the template.
   */
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
