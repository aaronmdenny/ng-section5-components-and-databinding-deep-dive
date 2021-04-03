import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  // These properties were used when the input elements in the template used two-way data binding via [(ngModel)].
  // newServerName = '';
  // newServerContent = '';

  /**
   * serverContentInput is a local reference in the template. It gives us access to the input element labeled 'Server
   * Content'. ViewChild gives us access to elements of the DOM without needing a user event (like a button click) to
   * call a function here in the Component, passing in the local reference as a parameter.
   * 
   * Since we want to use the value in ngOnInit(), we set the static property to true. This means we get the DOM query 
   * result prior to when Angular's change detection runs.
   * 
   * You could pass a Component name to the Viewchild decorator if you wanted to access a component, e.g., 
   * @ViewChild(ServerElementComponent) to access the server-element-component we created previously. If there are more
   * than one instances of the component, we would get the first occurrance of the component from the DOM query.
   * However, here we do not access a component, so we pass a string named after the local reference.
   * 
   * The type for a @Viewchild() DOM query property is ElementRef.
   */
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

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
      // The nativeElement property accesses the underlying element from the DOM. You should not use this to change 
      // the DOM. Do this though other means offered by Angular.
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
