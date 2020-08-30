import { Component, OnInit, Input } from '@angular/core';

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
   * If you want to allow parent components to be able to bind to a property, you must add the @Input
   * decorator
   */
  @Input() element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
