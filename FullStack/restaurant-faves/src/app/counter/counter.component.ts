import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  currentCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.currentCount++;
  }

}
