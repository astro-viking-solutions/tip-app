import { Component, OnInit } from '@angular/core';
import {TipCalculation} from './tip-calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amount: number;
  tipCalculations: TipCalculation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doCalculations(): void {
    this.tipCalculations = [];
    if (this.amount > 0) {
      this.doCalculation(.1);
      this.doCalculation(.15);
      this.doCalculation(.2);
      this.doCalculation(.25);
    }
  }
  doCalculation(percent: number): void {
    const tip = new TipCalculation();
    tip.percent = percent * 100;
    tip.tipAmount = this.amount * percent;
    tip.tipTotal = this.amount + tip.tipAmount;
    this.tipCalculations.push(tip);
  }
}
