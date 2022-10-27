import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  constructor() {}

  startCooking() {
    this.isCooked = true;
  }

  ngOnInit(): void {}
}
