import { Component } from '@angular/core';
import { Fuel } from './model/fuel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mm95 = 6126;
  mm100 = 6107;
  sum1: number = 0;
  sum2: number = 0;
  data: Fuel[] = [
    {
      day: 1,
      m95: 378,
      m100: 380,
    },
    {
      day: 2,
      m95: 362,
      m100: 102,
    },
    {
      day: 3,
      m95: 229,
      m100: 110,
    },
    {
      day: 4,
      m95: 212,
      m100: 73,
    },
    {
      day: 5,
      m95: 204,
      m100: 225,
    },
  ];
  sum95 = this.data.forEach((item) => {
    this.sum1 += Number(item.m95);
    console.log(this.sum1);
  });
  sum100 = this.data.forEach((item) => {
    this.sum2 += Number(item.m100);
    console.log(this.sum2);
  });
  flag100: boolean = this.sum2 - (this.mm100 * this.data.length) / 30 > 0;
  condition95 =
    this.sum1 - (this.mm95 * this.data.length) / 30 > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
  condition100 =
    this.sum2 - (this.mm100 * this.data.length) / 30 > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
}
