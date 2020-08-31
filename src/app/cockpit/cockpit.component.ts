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
  /**
   * You can assign an alias to @Output() if you want the parent component to refer to the event by a different
   * name.
   */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * We call emit() on the EventEmitter to emit the event when onAddServer() is called in the template.
   */
  onAddServer(nameInput: HTMLInputElement) {
    /**
     * With this, we will log the input element itself:
     * 
     * <input _ngcontent-onk-1 class="form-control" type="text">
     */
    console.log(nameInput);

    /**
     * Since we know an input element has a "value" property, we can log this as well:
     */
    console.log(nameInput.value);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
