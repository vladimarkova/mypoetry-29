import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  text: string = "mypoetry' 29";

  date: string = new Date().toISOString();

  intervalId: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.date = new Date().toISOString();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
