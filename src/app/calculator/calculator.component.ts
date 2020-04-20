import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amount: number;
  tenPercentTip: number;
  tenPercentTotal: number;
  fifteenPercentTip: number;
  fifteenPercentTotal: number;
  twentyPercentTip: number;
  twentyPercentTotal: number;
  twentyfivePercentTip: number;
  twentyfivePercentTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAmountChange() {
    this.tenPercentTip = this.amount * .1;
    this.tenPercentTotal = this.amount + (this.amount * .1);
    this.fifteenPercentTip = this.amount * .15;
    this.fifteenPercentTotal = this.amount + (this.amount * .15);
    this.twentyPercentTip = this.amount * .2;
    this.twentyPercentTotal = this.amount + (this.amount * .2);
    this.twentyfivePercentTip = this.amount * .25;
    this.twentyfivePercentTotal = this.amount + (this.amount * .25);
  }

  convertString() {

  }

}
