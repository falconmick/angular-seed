import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./site.scss'],
  encapsulation: ViewEncapsulation.None // the styles defined in site.scss will bleed out of the Component  
})                                      // this is ok as I am using the root component to style the entire page
export class AppComponent implements AfterViewInit  {
  ngAfterViewInit() {
    // materialize init
    $(".button-collapse").sideNav();

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    ); 
  }
 }
