import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title         : string = 'todo';
  username      : string = '';

  currentTaskNo : Number = -1;

  ngOnInit(): void {
    this.username       = 'ekusiaD';
    this.currentTaskNo  = -1;
  }
  
}
