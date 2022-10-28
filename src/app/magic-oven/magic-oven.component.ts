import { Component, OnInit, Input } from '@angular/core';
import { CookiesRecipe } from '../models/CookiesRecipe';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css'],
})
export class MagicOvenComponent implements OnInit {
  @Input()
  CookiesRecipe: CookiesRecipe = {
    numberOfCookies: 0,
    flour: 0,
    salt: 0,
    sugar: 0,
    egg: 0,
  };

  @Input()
  isCooking: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
