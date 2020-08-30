import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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
export class ServerElementComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
