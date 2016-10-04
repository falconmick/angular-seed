import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./site.scss'],
  encapsulation: ViewEncapsulation.None // the styles defined in site.scss will bleed out of the Component  
})                                      // this is ok as I am using the root component to style the entire page
export class AppComponent { }
