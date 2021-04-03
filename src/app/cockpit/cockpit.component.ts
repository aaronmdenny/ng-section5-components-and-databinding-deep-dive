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

  /**
   * ngOnInit() is a lifecycle hook. If a new component is created in Angular, Angular goes through some phases in the 
   * component creation process. It gives us a chance to hook into these phases and execute some code. We hook into 
   * these phases by implementing some methods that Angular will call if those methods are present.
   * 
   * 1. ngOnChanges: This may be executed multiple times. It is executed at the start when a new component is created, 
   *    and thereafter is called whenever a bound input property changes (properties decorated with @Input()).
   * 
   * 2. ngOnInit: Called when the component is initialized (the object is created - not when the component is displayed
   *    in the DOM). It is called after the constructor.
   * 
   * 3. ngDoCheck: Called during every change detection run. Change detection is the system by which Angular determines 
   *    whether something changed inside of a component and something in the template must be updated to reflect the 
   *    change. Some property may have changed from 1 to 2, for example. This method is run on every check that Angular 
   *    makes, regardless of whether a change happened. So, ngDoCheck will run because, say, you click on a button, 
   *    which doesn't change anything, but is still an event and Angular must check if something changed on every event.
   *    There are certain triggering events, such as when you click on somewhere, or a timer fires, or an Observable is 
   *    resolved. On these occasions, the code you write in ngDoCheck will be executed. You can use ngDoCheck to inform 
   *    Angular about some change it would not be able to otherwise detect.
   * 
   * 4. ngAfterContentInit: Called after content (ng-content) has been projected into view. See the previous commit for 
   *    information about ng-content.
   * 
   * 5. ngAfterContentChecked: Called every time the projected content that goes in ng-content has been checked by 
   *    change detection. See the previous commit for information about ng-content.
   * 
   * 6. ngAfterViewInit: Called after the component's view (and child views) have been initialized (the view is 
   *    rendered).
   * 
   * 7. ngAfterViewChecked: Called every time the view (and child views) have been checked by change detection.
   * 
   * 8. ngOnDestroy: Called when the component is about to be destroyed. This can happen, for example, if you place an 
   *    *ngIf directive on the component and it evaluates to false.
   */
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
