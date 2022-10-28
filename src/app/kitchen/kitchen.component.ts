import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  constructor() {}

  ingredients = {
    numberOfCookies: 0,
    flour: 0,
    salt: 0,
    sugar: 0,
    egg: 0,
  };

  isCooked: boolean = false;

  startCooking() {
    this.isCooked = true;
  }

  ngOnInit(): void {}
}
