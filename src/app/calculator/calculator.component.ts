import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amount: number;
  tenPercent: number;
  fifteenPercent: number;
  twentyPercent: number;
  twentyfivePercent: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAmountChange() {
    this.tenPercent = this.amount * .1;
    this.fifteenPercent = this.amount * .15;
    this.twentyPercent = this.amount * .2;
    this.twentyfivePercent = this.amount * .25;
  }

}
