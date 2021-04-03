import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

/**
 * We can use the "encapsulation" property on the @Component() decorator to override Angular's
 * default view encapsulation:
 * 
 *  encapsulation: ViewEncapsulation.None
 * 
 * ViewEncapsulation.None removes the Angular-generated attributes that allow view encapsulation to
 * occur. With this option, the component will not use view encapsulation, but the others still may.
 * 
 * If you apply styles to the CSS file in this component, the styles will be applied globally.
 * 
 * ViewEncapsulation.Native uses the shadow DOM technology. This should give you the same result as
 * ViewEncapsulation.Emulated (the default option), but only in browsers that support shadow DOM
 * technology.
 */
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit {
  /**
   * We define a JavaScript object that we want to receive from the app component.
   * 
   * By default, all properties of components are only accessible inside of their components, not from
   * outside.
   * 
   * If you want to allow parent components to be able to bind to a property, you must add the @Input()
   * decorator.
   */
   /**
    * Sometimes, you don't want to use the same property name outside of the component as you do inside 
    * of it.
    * 
    * Inside (here), we may want to use the name "element", but we may want to expose the property to
    * other components using a different name.
    * 
    * You can pass an alias argument to @Input(). From the outside, this will be how the element is
    * accessed.
    */
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  constructor() {
    console.log('Constructor called');
  }

  // Called when the content that has been projected into <ng-content></ng-content> has been checked by change
  // detection.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  // Notice this gets called several times and after the content passed in via <ng-content></ng-content> has been 
  // checked.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  // Called after the content from the parent is projected into <ng-content></ng-content>. Only called one time.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  // Executd on every change detection run.
  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called');
    /**
     * changes is an object containing key-value pairs. The keys are the names of input properties. We have an input 
     * property, 'name', that holds a string. The value stored at 'name' contains an object with a 'currentValue' 
     * key. Stored here is the current value of the input property, which in this case, will be what was passed in from
     * the parent. There is also a previousValue key that holds the previous value (if present). If the parent sends 
     * new values, ngOnChanges will execute again.
     * 
     * Be aware that ngOnChanges() will not fire if you simply change a value in a JavaScript object that is passed in 
     * as input because the object does not change, i.e., it still points to the same object in memory. You would have 
     * to pass in a new object to fire ngOnChanges().
     */
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

}
