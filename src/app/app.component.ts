import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mypoetry-29';

  date: string = new Date().toISOString();

  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.date = new Date().toISOString();
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
